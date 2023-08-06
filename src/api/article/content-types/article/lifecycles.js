const slugifyAr = require("slugify");
slugifyAr.extend({
  ء: "ء",
  ا: "ا",
  أ: "أ",
  إ: "إ",
  آ: "آ",
  ؤ: "ؤ",
  ئ: "ئ",
  ب: "ب",
  ت: "ت",
  ث: "ث",
  ج: "ج",
  ح: "ح",
  خ: "خ",
  د: "د",
  ذ: "ذ",
  ر: "ر",
  ز: "ز",
  س: "س",
  ش: "ش",
  ص: "ص",
  ض: "ض",
  ط: "ط",
  ظ: "ظ",
  ع: "ع",
  غ: "غ",
  ف: "ف",
  ق: "ق",
  ك: "ك",
  ل: "ل",
  م: "م",
  ن: "ن",
  ه: "ه",
  و: "و",
  ي: "ي",
  ة: "ة",
  ى: "ى",
});
module.exports = {
  beforeCreate: async (event) => {
    const arabicTitle = event.params.data.title; // تحصل على العنوان باللغة العربية من بيانات الإدخال

    const arabicSlug = slugifyAr(arabicTitle, {
      lower: true,
      remove: /[$*_+~.()'"!\-:@A-Za-z]+/g,
      locale: "ar",
    });
    event.params.data.slug = arabicSlug;
    // يمكنك أيضًا إجراء أي عمليات إضافية اللازمة هنا
  },
  async afterCreate(event) {
    const arabicTitle = event.params.data.title; // تحصل على العنوان باللغة العربية من بيانات الإدخال

    const arabicSlug = slugifyAr(arabicTitle, {
      lower: true,
      remove: /[$*_+~.()'"!\-:@A-Za-z]+/g,
      locale: "ar",
    });
    event.params.data.slug = arabicSlug;
  },

  beforeUpdate: async (event) => {
    if (event.params.data.title) {
      const arabicTitle = event.params.data.title; // تحصل على العنوان باللغة العربية من بيانات الإدخال

      const arabicSlug = slugifyAr(arabicTitle, {
        lower: true,
        remove: /[$*_+~.()'"!\-:@A-Za-z]+/g,
        locale: "ar",
      });

      event.params.data.slug = arabicSlug;
    }
  },
  afterUpdate: async (event) => {
    if (event.params.data.title) {
      const arabicTitle = event.params.data.title; // تحصل على العنوان باللغة العربية من بيانات الإدخال

      const arabicSlug = slugifyAr(arabicTitle, {
        lower: true,
        remove: /[$*_+~.()'"!\-:@A-Za-z]+/g,
        locale: "ar",
      });

      event.params.data.slug = arabicSlug;
    }
  },
};

// // في ملف config/functions/bootstrap.js
// const { google } = require(`googleapis`);
// const fs = require(`fs`);

// module.exports = () => {
//   // إنشاء عميل OAuth2
//   const oauth2Client = new google.auth.OAuth2(
//     process.env.YOUTUBE_CLIENT_ID,
//     process.env.YOUTUBE_CLIENT_SECRET,
//     process.env.YOUTUBE_REDIRECT_URL
//   );

//   // تعيين رمز الوصول المحفوظ في متغير بيئي
//   oauth2Client.setCredentials({
//     access_token: process.env.YOUTUBE_ACCESS_TOKEN,
//   });

//   // إنشاء كائن youtube
//   const youtube = google.youtube({ version: `v3`, auth: oauth2Client });

//   // تعريف دالة لإرسال فيديو إلى youtube
//   const uploadVideo = async (video) => {
//     try {
//       // قراءة ملف الفيديو من المسار المحدد
//       const videoFile = fs.readFileSync(video.path);

//       // إنشاء طلب لإرسال الفيديو
//       const request = await youtube.videos.insert({
//         part: "snippet,status",
//         requestBody: {
//           snippet: {
//             title: video.title,
//             description: video.description,
//             tags: video.tags,
//           },
//           status: {
//             privacyStatus: video.privacyStatus,
//           },
//         },
//         media: {
//           body: videoFile,
//         },
//       });

//       // إرجاع رابط الفيديو المرسل
//       return `https://www.youtube.com/watch?v=${request.data.id}`;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//     Copy;
//   };

//   // تعريف دالة للحصول على رمز التفويض من youtube
//   const getAuthUrl = () => {
//     // توليد رابط التفويض مع نطاقات الوصول المطلوبة
//     const authUrl = oauth2Client.generateAuthUrl({
//       access_type: `offline`,
//       scope: [`https://www.googleapis.com/auth/youtube.upload`],
//     });

//     // إرجاع رابط التفويض
//     return authUrl;
//     Copy;
//   };

//   // تعريف دالة للحصول على رمز الوصول من youtube
//   const getAccessToken = async (code) => {
//     try {
//       // استبدال رمز التفويض برمز الوصول
//       const { tokens } = await oauth2Client.getToken(code);

//       // إرجاع رمز الوصول
//       return tokens.access_token;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//     Copy;
//   };

//   // إضافة الدوال إلى كائن strapi
//   strapi.services.youtube = { uploadVideo, getAuthUrl, getAccessToken };
// };

// // في ملف api/video/controllers/video.js

// module.exports = {
//   async create(ctx) {
//     try {
//       // استخراج بيانات الفيديو من طلب POST
//       const { title, description, tags, privacyStatus, file } =
//         ctx.request.body;

//       // استخدام خدمة youtube لإرسال الفيديو والحصول على رابطه
//       const url = await strapi.services.youtube.uploadVideo({
//         title,
//         description,
//         tags,
//         privacyStatus,
//         path: file.path,
//       });

//       // التحقق من أن الرابط غير فارغ
//       if (url) {
//         // إنشاء سجل جديد في نموذج video مع بيانات الفيديو والرابط
//         const video = await strapi.services.video.create({
//           title,
//           description,
//           tags,
//           privacyStatus,
//           url,
//         });

//         // إرجاع السجل المنشأ كاستجابة JSON
//         ctx.send(video);
//       } else {
//         // إرجاع خطأ بأنه لم يتم إرسال الفيديو بنجاح
//         ctx.throw(500, "Failed to upload video to YouTube");
//       }
//     } catch (error) {
//       console.error(error);
//       ctx.throw(500, error.message);
//     }
//     Copy;
//   },
// };
