<template>
  <div class="p-5 bg-violet-50">
    <div class="p-5 stitch relative">
      <div class="bg-center bg-fixed overflow-hidden">
        <div class="bg-opacity-40 py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col md:flex-row items-start">
                <h1
                  class="text-4xl font-extrabold text-[#9E6CA1] hover:text-[#553788] sm:text-5xl md:text-6xl"
                >
                  Hakkımızda
                </h1>
              </div>
            </div>
            <div class="mt-12">
              <p class="text-lg text-gray-500">
                Terzi Leyla olarak, giyim dünyasına özenle dokunuyor ve
                kıyafetlerinizdeki detaylara önem veriyoruz. Yılların verdiği
                deneyimle, her türlü terzi ihtiyacınıza profesyonel çözümler
                sunuyoruz. Bizim için kalite ve titizlik her şeyin başında
                geliyor, kıyafetlerinizin en küçük detayını bile önemsiyoruz.
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Müşteri memnuniyetini ilke edinerek, sunduğumuz hizmetler
                arasında paça tadilatı, çarşaf lastik takımı, arma dikimi,
                fermuar işlemleri, düğme değişimi ve tamiri, yırtık onarımı,
                askı takımı ve ayarı, daraltma ve genişletme, etek kısaltma ve
                uzatma, iplik ve dikiş tamiri, tüy dökümü ve temizliği gibi
                çeşitli hizmetler bulunmaktadır. Kıyafetlerinizin ömrünü uzatmak
                ve size en iyi deneyimi sunmak amacıyla buradayız.
              </p>
            </div>

            <div class="mt-14">
              <h2
                class="text-3xl font-bold text-[#9E6CA1] hover:text-[#553788]"
              >
                Bizimle İletişime Geçin
              </h2>
            </div>
            <div class="mt-14">
              <ul class="mt-4 list-inside text-lg text-gray-500 list-none">
                <li>Email: dostugurleyla@gmail.com</li>
                <nuxt-link
                  to="https://wa.me/<+905549710808> "
                  class="text-lg text-gray-500"
                  >Telefon: Hemen ulaşabilirsiniz
                  <Icon
                    name="logos:whatsapp-icon"
                    class="w-8 h-8 text-gray-700 pb-1 -mt-1"
                /></nuxt-link>
                <li>Adres: Atıfbey, 316/2. Sk. 1/a, 35410 Gaziemir/İzmir</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="stitching-animation">
        <Icon name="twemoji:sewing-needle" class="stitch-icon h-7 w-7" />
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
