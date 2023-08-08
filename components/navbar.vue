<template>
  <div id="TopMenu" class="w-full border-b font-sans">
    <div
      class="flex items-center justify-between px-4 md:px-8 py-2 bg-gray-50 border rounded-lg"
    >
      <div class="flex items-center">
        <nuxt-link to="/">
          <nuxt-img
            src="logo.png"
            alt="Logo"
            format="webp"
            class="h-8 md:h-16 logo"
            sizes=" sm:100vw md:100vw lg:400px"
          />
        </nuxt-link>
      </div>
      <ul class="text-sm md:text-lg flex flex-row">
        <li>
          <nuxt-link
            to="/"
            class="hidden sm:block py-2 text-[#9E6CA1] pl-4 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Anasayfa</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/services"
            class="block py-2 text-[#9E6CA1] pl-2 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            >Hizmetler</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/aboutus"
            class="block py-2 text-[#9E6CA1] pl-2 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            >Hakkımızda</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="block py-2 text-[#9E6CA1] pl-2 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >İletişim</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
