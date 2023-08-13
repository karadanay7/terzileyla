<template>
  <div class="p-5 bg-violet-50">
    <div class="p-5 stitch relative">
      <div class="stitching-animation">
        <Icon name="twemoji:sewing-needle" class="stitch-icon h-7 w-7" />
      </div>
      <h2
        class="font-bold mb-4 ml-2 text-[#9E6CA1] hover:text-[#553788] text-3xl sm:text-4xl md:text-4xl"
      >
        İletişim Bilgileri
      </h2>
      <div class="text-md md:text-lg text-gray-600 mb-10 ml-2">
        <p>
          Her türlü soru, öneri veya geri bildirim için bize ulaşabilirsiniz.
          İletişim bilgilerimiz aşağıda yer almaktadır:
        </p>
        <ul class="list-inside mt-6 list-none">
          <li>Email: dostugurleyla@gmail.com</li>
          <nuxt-link to="https://wa.me/<+905549710808> "
            >Telefon: Hemen ulaşabilirsiniz
            <Icon
              name="logos:whatsapp-icon"
              class="w-6 h-6 text-gray-700 -mt-1"
          /></nuxt-link>
          <li class="pb-2">
            Adres: Atıfbey, 316/2. Sk. 1/a, 35410 Gaziemir/İzmir
          </li>
        </ul>
      </div>
      <h2
        class="font-bold mb-2 ml-2 text-[#9E6CA1] hover:text-[#553788] text-lg sm:text-2xl md:text-3xl"
      >
        Bize Ulaşın
      </h2>
      <p class="text-md sm:text-lg text-gray-700 mb-4 ml-2">
        Sorularınızı, taleplerinizi veya herhangi bir konuyu bize iletmek için
        bizimle iletisme gecebilirsiniz. En kısa sürede size geri dönüş
        yapılacaktır.
      </p>
      <div class="max-w-screen-md mx-auto px-4 md:py-10">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E6CA1] hover:text-[#553788] mb-8 text-center"
        >
          Konum & Adres
        </h1>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed/v1/place?q=Atıfbey, 316/2. Sk. 1/a, 35410 Gaziemir/İzmir&key=AIzaSyA4B6V3x4pq4c4CBlFkV_oPX4GJRddfIAI"
          allowfullscreen
        ></iframe>
      </div>
      <div class="stitch-line"></div>
      <div class="bg-violet-50 h-2 absolute -left-14 top-0 w-full mask"></div>
    </div>
  </div>
</template>

<style>
.stitch {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='20%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
.stitching-animation {
  @apply absolute -top-3 right-6;
  animation: stitching 1s linear infinite forwards,
    toLeft 20s linear infinite forwards;
}

@keyframes stitching {
  from,
  to {
    transform: translate(-10px) rotate(110deg);
  }
  35% {
    transform: translateY(0) rotate(-40deg);
  }
  65% {
    transform: translateY(10px) rotate(20deg);
  }
}
@keyframes toLeft {
  to {
    right: 100%;
  }
}
.mask {
  @apply w-full;
  animation: fadeToLeft 20s linear infinite forwards;
}
@keyframes fadeToLeft {
  to {
    width: 0;
  }
}
</style>
