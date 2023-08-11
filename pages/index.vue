<template>
  <div class="bg-gray-50">
    <Vue3Marquee class=" ">
      <h1 class="font-bold pr-28">Paça Tadilatı</h1>
      <h1 class="font-bold pr-28">Çarşaflara Lastik Dikimi</h1>
      <h1 class="font-bold pr-28">Arma Dikimi</h1>
      <h1 class="font-bold pr-28">Fermuar İşlemleri</h1>
      <h1 class="font-bold pr-28">Her Türlü Tadilat</h1>
      <h1 class="font-bold pr-28">Ütü ve Kurutemizleme</h1>
    </Vue3Marquee>
    <div class="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="text-center md:text-left">
          <nuxt-link
            to="https://wa.me/<+905549710808> "
            class="text-lg font-semibold text-gray-700"
            >Hemen Ulasin!
            <Icon
              name="logos:whatsapp-icon"
              class="w-10 h-10 text-gray-700 pb-1 -mt-1"
          /></nuxt-link>
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-700">
            Hoş Geldiniz!
          </h1>

          <p class="text-lg text-gray-600">
            Terzi Leyla, sizin için en iyi tadilat islemlerini yapmak icin
            burada! Kaliteli hizmetimiz ve uzman ekibimizle her türlü
            ihtiyacınıza cevap veriyoruz.
          </p>
          <NuxtLink to="/services">
            <button
              class="bg-[#9E6CA1] hover:bg-[#553788] text-white py-2 px-6 mt-6 rounded-full text-lg"
            >
              Hizmetlerimize Göz Atın
            </button>
          </NuxtLink>
        </div>
        <div class="flex justify-center items-center">
          <nuxt-img
            src="/clip-art-sewing-machines-openclipart-quilting-sewing-machine-094d4b1ed6035d9b1e369ce08db32cf6.png"
            alt="Terzi Leyla"
            class="rounded-lg shadow-md"
            format="webp"
            sizes="sm:100vw md:50vw lg:400px"
          />
        </div>
      </div>
    </div>
    <div class="max-w-screen-md mx-auto px-4 md:py-24">
      <h1 class="text-4xl font-bold text-gray-700 mb-8 text-center">
        Konum & Adres
      </h1>
      <iframe
        width="100%"
        height="300px"
        frameborder="0"
        style="border: 0"
        src="https://www.google.com/maps/embed/v1/place?q=Atıfbey, 316/2. Sk. 1/a, 35410 Gaziemir/İzmir&key=AIzaSyA4B6V3x4pq4c4CBlFkV_oPX4GJRddfIAI"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
