// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/supabase"],
  
  googleFonts: {
    families: {
      Roboto: true,
      "Open+Sans": {
        wght: [400, 700],
      },
    },
    display: "swap",
  },
});
