// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ["vue", "vue/server-renderer"],
      },
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
  site: {
    url: "https://terzileyla.com",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "tr",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/ico.png",
        },
      ],

      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Terzi Leyla - İzmir Gaziemir  Kıyafet Tadilatı  ",
      meta: [
        {
          name: "google-site-verification",
          content: "S3apzT565eDfOsgqIxoN0maxuZkiQXTVleXVl9ymsYQ",
        },
        {
          name: "description",
          content:
            "İzmir Gaziemir'de uzman terzi Leyla olarak kıyafet tadilatı, dikimi ve onarımında hizmetinizdeyiz. Kaliteli işçilik ve titizlikle hayal ettiğiniz kıyafetleri gerçeğe dönüştürüyoruz.",
        },
        {
          name: "keywords",
          content:
            "İzmir Terzi,Sarnıç Terzi, Gaziemir terzi, Karabağlar terzi, buca terzi, narlıdere terzi, balçova terzi, alsancak terzi, konak terzi, hatay terzi, goztepe terzi, bornova terzi, uckuyular terzi, ucyol terzi, Gaziemir Kıyafet Tadilatı, Terzi Leyla, , Giysi Onarımı, Kıyafet Tamiri, Gaziemir Terzilik Hizmetleri,  izmir uygun terzi, İzmir kaliteli terzi, İzmir ucuz terzi, Gaziemir ucuz terzi, Gaziemir uygun terzi, en yakın terzi, hızlı onarım terzi",
        },
      ],
    },
    // baseURL: "/sadi/",
  },
});
