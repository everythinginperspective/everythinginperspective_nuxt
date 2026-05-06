import { defineEventHandler, getRouterParam, createError } from 'file:///workspace/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs';
import { serverQueryContent } from '#content/server';

const ____slug_ = defineEventHandler(async (event) => {
  const type = getRouterParam(event, "type");
  const slug = getRouterParam(event, "slug") || "";
  const contentType = await getContentTypeBySingular(type || "") || await getContentTypeByPlural(type || "");
  if (!contentType) {
    throw createError({
      statusCode: 404,
      message: "Content type not found"
    });
  }
  try {
    if (slug) {
      const item = await serverQueryContent(event, `/${contentType.folder}/${slug}`).findOne();
      return item;
    }
    const items = await serverQueryContent(event, `/${contentType.folder}`).find();
    return items;
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Content not found"
    });
  }
});

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.mjs.map
