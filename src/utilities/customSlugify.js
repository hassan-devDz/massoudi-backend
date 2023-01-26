// delete require.cache[require.resolve("slugify")];
// const slugify = require("slugify");
// const arabic = {
//   ء: "ء",
//   ا: "ا",
//   أ: "أ",
//   إ: "إ",
//   آ: "آ",
//   ؤ: "ؤ",
//   ئ: "ئ",
//   ب: "ب",
//   ت: "ت",
//   ث: "ث",
//   ج: "ج",
//   ح: "ح",
//   خ: "خ",
//   د: "د",
//   ذ: "ذ",
//   ر: "ر",
//   ز: "ز",
//   س: "س",
//   ش: "ش",
//   ص: "ص",
//   ض: "ض",
//   ط: "ط",
//   ظ: "ظ",
//   ع: "ع",
//   غ: "غ",
//   ف: "ف",
//   ق: "ق",
//   ك: "ك",
//   ل: "ل",
//   م: "م",
//   ن: "ن",
//   ه: "ه",
//   و: "و",
//   ي: "ي",
//   ة: "ة",
//   ى: "ى",
// };
// const arabicSlug = (input) => {
//   slugify.extend(arabic);
//   return slugify(input, {
//     remove: /[$*_+~.()'"!\-:@]+/g,
//   });
// };

// const getUniqueSlug = async (title, num = 0) => {
//   let input = `${title} t`;
//   console.log(input);
//   if (num > 0) {
//     input = `${title}-${num}`;
//   }
//   const regex = /[^\d\u0621-\u064A]+/g;

//   const slug = arabicSlug(input, {
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

// function customSlugify() {
//   return {
//     afterCreate: async (event) => {
//       if (event.params.data.title) {
//         try {
//           const uid = event.model.uid;
//           await strapi.db.query(uid).update({
//             where: { id: event.result.id },
//             data: {
//               newX: event.result.id + "-" + arabicSlug(event.params.data.title),
//             },
//           });
//         } catch (error) {
//           console.log("------->error", error);
//         }
//       }
//     },
//     beforeUpdate: async (event) => {
//       if (event.params.data.title) {
//         event.params.data.newX =
//           event.params.where.id + "-" + arabicSlug(event.params.data.title);
//       }
//     },
//   };
// }

// exports.customSlugify = customSlugify;
