// const slugify = require("slugify");

// const getUniqueSlug = async (title, num = 0) => {
//   const slugifyService = strapi.plugins["slugify"].services.slugify;

//   slugify.extend({
//     ء: "ء",
//     ا: "ا",
//     أ: "أ",
//     إ: "إ",
//     آ: "آ",
//     ؤ: "ؤ",
//     ئ: "ئ",
//     ب: "ب",
//     ت: "ت",
//     ث: "ث",
//     ج: "ج",
//     ح: "ح",
//     خ: "خ",
//     د: "د",
//     ذ: "ذ",
//     ر: "ر",
//     ز: "ز",
//     س: "س",
//     ش: "ش",
//     ص: "ص",
//     ض: "ض",
//     ط: "ط",
//     ظ: "ظ",
//     ع: "ع",
//     غ: "غ",
//     ف: "ف",
//     ق: "ق",
//     ك: "ك",
//     ل: "ل",
//     م: "م",
//     ن: "ن",
//     ه: "ه",
//     و: "و",
//     ي: "ي",
//     ة: "ة",
//     ى: "ى",
//   });

//   let input = `${title}`;

//   if (num > 0) {
//     input = `${title}-${num}`;
//   }

//   const slug = slugifyService.slugify(input, {
//     remove: /[$*_+~.()'"!\-:@]+/g,
//   });

//   const [article] = await strapi.services.article.find({
//     slug: slug,
//   });

//   if (!article) {
//     return slug;
//   } else {
//     return getUniqueSlug(title, num + 1);
//   }
// };

// module.exports = {
//   lifecycles: {
//     beforeCreate: async (data) => {
//       const { name } = data;
//       data.slug = await getUniqueSlug(name);
//     },
//     beforeUpdate: async (params, data) => {
//       const { name } = data;
//       data.slug = await getUniqueSlug(name);
//     },
//   },
// };

const { createCoreService } = require("@strapi/strapi").factories;
module.exports = createCoreService("api::article.article");
