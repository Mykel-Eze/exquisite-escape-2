import dayjs from "dayjs";
import "dayjs/locale/en"; // Optionally, import additional locales

// Optionally, configure Day.js (e.g., set locale, plugins)
// dayjs.locale('en');

// export default defineNuxtPlugin(({ app }) => {
//   app.config.globalProperties.$dayjs = dayjs;
// });
export default function (app) {
  // app.provide("dayjs", dayjs);
  app.config.globalProperties.$dayjs = dayjs
}
