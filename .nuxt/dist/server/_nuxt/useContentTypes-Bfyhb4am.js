let cachedContentTypes = null;
const useContentTypes = async () => {
  if (cachedContentTypes) {
    return cachedContentTypes;
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
//# sourceMappingURL=useContentTypes-Bfyhb4am.js.map
