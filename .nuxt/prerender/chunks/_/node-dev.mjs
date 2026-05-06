import { Worker } from 'node:worker_threads';

const workerCode = `
const { createRequire } = require('node:module')
const _require = createRequire(process.cwd() + '/')
const { parentPort } = require('node:worker_threads')
const { Renderer, extractResourceUrls } = _require('@takumi-rs/core')

let renderer = new Renderer()

parentPort.on('message', async ({ id, type, newFonts, nodes, options }) => {
  try {
    if (type === 'extractResourceUrls') {
      const urls = extractResourceUrls(nodes)
      parentPort.postMessage({ id, urls })
      return
    }
    const fontWarnings = []
    for (const font of (newFonts || [])) {
      try {
        await renderer.loadFont({
          name: font.name,
          data: font.data,
          weight: font.weight,
          style: font.style,
        })
      } catch (e) {
        fontWarnings.push({ name: font.name, weight: font.weight, error: e?.message || String(e) })
      }
    }
    const image = await renderer.render(nodes, options)
    // Always slice to create a standard ArrayBuffer \u2014 native addon buffers
    // use external memory that can't be transferred via postMessage
    const ab = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength)
    parentPort.postMessage({ id, image: ab, fontWarnings }, [ab])
  } catch (err) {
    parentPort.postMessage({ id, error: err?.message || String(err) })
  }
})
`;
let worker = null;
let workerGeneration = 0;
let requestId = 0;
const pending = /* @__PURE__ */ new Map();
function killWorker() {
  if (!worker)
    return;
  worker.terminate();
  worker = null;
  for (const [id, p] of pending) {
    clearTimeout(p.timer);
    pending.delete(id);
    p.reject(new Error("Takumi worker terminated"));
  }
}
const signalKey = Symbol.for("og-image:takumi-worker-cleanup");
if (!globalThis[signalKey]) {
  globalThis[signalKey] = true;
  process.on("exit", killWorker);
}
function createWorker() {
  workerGeneration++;
  const w = new Worker(workerCode, { eval: true });
  w.on("message", ({ id, image, urls, error, fontWarnings }) => {
    const p = pending.get(id);
    if (p) {
      clearTimeout(p.timer);
      pending.delete(id);
      if (error)
        p.reject(new Error(error));
      else if (urls !== void 0)
        p.resolve(urls);
      else
        p.resolve({ image: Buffer.from(image), fontWarnings });
    }
  });
  w.on("error", (err) => {
    for (const [id, p] of pending) {
      clearTimeout(p.timer);
      pending.delete(id);
      p.reject(err);
    }
    worker = null;
  });
  w.on("exit", (code) => {
    if (code !== 0) {
      for (const [id, p] of pending) {
        clearTimeout(p.timer);
        pending.delete(id);
        p.reject(new Error(`Takumi worker exited with code ${code}`));
      }
    }
    worker = null;
  });
  w.unref();
  return w;
}
function ensureWorker() {
  if (!worker)
    worker = createWorker();
}
function postToWorker(msg, timeoutMs = 3e4) {
  return new Promise((resolve, reject) => {
    ensureWorker();
    const id = ++requestId;
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error("takumi worker timed out \u2014 killing worker"));
      killWorker();
    }, timeoutMs);
    pending.set(id, { resolve, reject, timer });
    worker.postMessage({ id, ...msg });
  });
}
function extractResourceUrls(nodes) {
  return postToWorker({ type: "extractResourceUrls", nodes });
}
class RendererWorkerProxy {
  allFonts = [];
  allFontKeys = /* @__PURE__ */ new Set();
  pendingFonts = [];
  syncedGeneration = -1;
  loadFont(font) {
    const key = `${font.name}|${font.weight || 400}|${font.style || "normal"}`;
    if (this.allFontKeys.has(key))
      return;
    this.allFontKeys.add(key);
    this.allFonts.push(font);
    this.pendingFonts.push(font);
  }
  render(nodes, options) {
    ensureWorker();
    let fontsToSend;
    if (this.syncedGeneration !== workerGeneration) {
      fontsToSend = [...this.allFonts];
      this.pendingFonts = [];
    } else {
      fontsToSend = this.pendingFonts.splice(0);
    }
    this.syncedGeneration = workerGeneration;
    return postToWorker({ type: "render", newFonts: fontsToSend, nodes, options }).then((result) => {
      if (result.fontWarnings?.length) {
        for (const w of result.fontWarnings)
          console.warn(`[nuxt-og-image] Failed to load font "${w.name}" (weight: ${w.weight}) into takumi renderer: ${w.error}`);
      }
      return result.image;
    });
  }
}
const nodeDev = {
  initWasmPromise: Promise.resolve(),
  Renderer: RendererWorkerProxy,
  extractResourceUrls
};

export { nodeDev as default };
//# sourceMappingURL=node-dev.mjs.map
