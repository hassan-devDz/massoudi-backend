"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");
// , {
//   async create(ctx) {
//     // استخراج البيانات من الجسم الطلب
//     const { videoLink, ...otherData } = ctx.request.body;
//     console.log(ctx.request.body);
//     // التحقق من صحة رابط الفيديو
//     if (
//       !/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?\s]+)$/.test(
//         videoLink
//       )
//     ) {
//       return ctx.throw(400, "رابط الفيديو غير صالح");
//     }

//     // إنشاء العنصر بباقي البيانات
//     const createdItem = await strapi.services["article"].create({
//       videoLink,
//       ...otherData,
//     });

//     // إرجاع العنصر الجديد
//     return createdItem;
//   },
// }
