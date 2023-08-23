<template>
  <div class="bg-gray-50 w-full">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-center flex-col md:flex-row"
    >
      <div class="flex items-center justify-center md:justify-start">
        <nuxt-link href="/" class="hover:underline non-italic">
          <nuxt-img
            src="/logo.png"
            alt="Logo"
            class="h-10 md:h-16 mr-4"
            sizes="sm:100vw md:50vw lg:400px"
            format="webp"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto py-8">
      <p class="text-md text-gray-600 font-serif italic text-center">
        "Kıyafetleriniz Bizim İşimiz, İyi Görünmek Sizin Seçiminiz.."
      </p>
      <p class="text-sm text-gray-400 text-center mt-4">
        &copy; 2023. Tüm hakları saklıdır.
      </p>
      <hr class="my-6 border-gray-500 mx-auto lg:my-8" />
    </div>
  </div>
</template>
