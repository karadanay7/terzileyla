<template>
  <div id="TopMenu" class="w-full border-b font-sans">
    <div class="flex items-center justify-between px-4 md:px-8 py-2 bg-gray-50">
      <div class="flex items-center">
        <nuxt-link to="/">
          <nuxt-img
            src="/logo.png"
            alt="Logo"
            format="webp"
            class="h-14"
            sizes="sm:100vw md:100vw lg:400px"
          />
        </nuxt-link>
      </div>
      <!-- Hamburger menu icon -->
      <button
        @click="toggleMenu()"
        class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <Icon
          :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'"
          class="w-6 h-6 text-gray-700"
        />
      </button>
      <!-- Desktop menu -->
      <ul class="hidden md:flex text-sm md:text-lg flex-row">
        <li>
          <nuxt-link
            to="/"
            class="py-2 px-4 text-[#9E6CA1] hover:text-gray-900 hover:scale-110"
            aria-current="page"
            >Anasayfa</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/services"
            class="py-2 px-4 text-[#9E6CA1] hover:text-gray-900 hover:scale-110"
            >Hizmetler</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/aboutus"
            class="py-2 px-4 text-[#9E6CA1] hover:text-gray-900 hover:scale-110"
            >Hakkımızda</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="py-2 px-4 text-[#9E6CA1] hover:text-gray-900 hover:scale-110"
            aria-current="page"
            >İletişim</nuxt-link
          >
        </li>
      </ul>
    </div>
    <!-- Hamburger menu content -->
    <ul
      v-if="isMenuOpen"
      class="block md:hidden absolute z-10 w-2/4 right-0 bg-gray-50 border rounded-lg py-2 text-start"
    >
      <li>
        <nuxt-link
          to="/"
          class="block py-2 px-4 text-[#9E6CA1] pl-8 hover:text-gray-900 hover:scale-110"
          aria-current="page"
          >Anasayfa</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/services"
          class="block py-2 px-4 text-[#9E6CA1] pl-8 hover:text-gray-900 hover:scale-110"
          >Hizmetler</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/aboutus"
          class="block py-2 px-4 text-[#9E6CA1] pl-8 hover:text-gray-900 hover:scale-110"
          >Hakkımızda</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/contact"
          class="block py-2 px-4 text-[#9E6CA1] pl-8 hover:text-gray-900 hover:scale-110"
          aria-current="page"
          >İletişim</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const isMenuOpen = ref(false);
const isSmallScreen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
