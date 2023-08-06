const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tag.tag", {
  async getCount(ctx) {
    const tags = await strapi.query("api::tag.tag").findMany({
      // uid syntax: 'api::api-name.content-type-name'

      populate: {
        articles: true,
        videos: true,
      },
    });

    const countPromises = tags.map(async (tag) => {
      const tagWithArticles = await strapi.query("api::tag.tag").findOne({
        where: { id: tag.id },
        populate: {
          articles: true,
          videos: true,
        },
      });
      const articlesCount = tagWithArticles.articles.length;
      const videosCount = tagWithArticles.videos.length;
      return { tag: tag.name, articlesCount, videosCount };
    });

    const counts = await Promise.all(countPromises);

    return counts;
  },
});

// {
//   findOne: [Function: findOne],
//   findMany: [Function: findMany],
//   findWithCount: [Function: findWithCount],
//   findPage: [AsyncFunction: findPage],
//   create: [Function: create],
//   createMany: [Function: createMany],
//   update: [Function: update],
//   updateMany: [Function: updateMany],
//   delete: [Function: delete],
//   deleteMany: [Function: deleteMany],
//   count: [Function: count],
//   attachRelations: [Function: attachRelations],
//   updateRelations: [Function: updateRelations],
//   deleteRelations: [Function: deleteRelations],
//   populate: [Function: populate],
//   load: [Function: load],
//   loadPages: [AsyncFunction: loadPages]
// }
