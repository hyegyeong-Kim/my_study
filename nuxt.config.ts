// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false, // Disable Server Side rendering

  components: ["~/components", { path: "~/components/sample", prefix: "Sample" }, { path: "~/components/admin", prefix: "Admin" }],
  modules: ["@element-plus/nuxt", "@vueuse/nuxt", "nuxt-swiper", "nuxt-icon", "nuxt-monaco-editor"],
  css: ["@/assets/css/common.scss"],
  monacoEditor: { locale: "ko" },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "My Suni Members",
      meta: [
        // Open Graph
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "My Suni Members" },
        { name: "og:title", content: "My Suni Members" },
        { name: "og:description", content: "구성원의 지속가능한 성장과 행복을 지원하는 'mySUNI'에 오신것을 환영합니다." },
        { name: "og:image", content: "https://mysuni.sk.com/api/checkpoint/public/img/login_logo_02_N.png" },
        { name: "og:url", content: "https://mysuni.sk.com/login" },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "My Suni Members" },
        { name: "twitter:title", content: "My Suni Members" },
        { name: "twitter:description", content: "구성원의 지속가능한 성장과 행복을 지원하는 'mySUNI'에 오신것을 환영합니다." },
        { name: "twitter:image", content: "https://mysuni.sk.com/api/checkpoint/public/img/login_logo_02_N.png" },
        { name: "twitter:url", content: "https://mysuni.sk.com/login" }
      ]
    }
  }
})
