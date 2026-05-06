let cachedContentTypes = null;
const useContentTypes = async () => {
  if (cachedContentTypes) {
    return cachedContentTypes;
  }
  {
    try {
      const { readFileSync } = await import("fs");
      const { join } = await import("path");
      const filePath = join(process.cwd(), "public", "content-types.json");
      const content = readFileSync(filePath, "utf-8");
      cachedContentTypes = JSON.parse(content);
      return cachedContentTypes;
    } catch (error) {
      console.error("Failed to load content types from filesystem:", error);
      return [];
    }
  }
  try {
    cachedContentTypes = await $fetch("/content-types.json");
    return cachedContentTypes;
  } catch (error) {
    console.error("Failed to load content types:", error);
    return [];
  }
};
const getContentTypeBySingular = async (singular) => {
  const types = await useContentTypes();
  return types.find((t) => t.singular === singular);
};
const getContentTypeByPlural = async (plural) => {
  const types = await useContentTypes();
  return types.find((t) => t.plural === plural);
};
export {
  getContentTypeBySingular as a,
  getContentTypeByPlural as g
};
//# sourceMappingURL=useContentTypes-DiGmzXH6.js.map
