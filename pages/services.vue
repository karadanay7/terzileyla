<template>
  <div class="bg-[#DFDBE5]">
    <div
      class="inset-0 bg-center p-8"
      style="
        background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%238448e3\' fill-opacity=\'0.42\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E');
      "
    >
      <div
        class="max-w-screen-xl mx-0 md:mx-20 px-4 py-4 md:py-6 bg-gray-50 rounded-3xl"
      >
        <h1
          class="text-3xl md:text-6xl font-bold mb-4 text-gray-500 text-center drop-shadow-lg"
        >
          Hizmetlerimiz
        </h1>
        <p class="text-lg text-gray-600 pl-4 text-center">
          Terzi Leyla olarak sizin için sunduğumuz çeşitli hizmetlerimize göz
          atın.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div v-for="(service, index) in services" :key="index">
            <h2
              class="text-xl md:text-2xl pl-0 md:pl-4 font-bold pb-1 text-[#9E6CA1] hover:text-[#553788]"
            >
              {{ service.title }}
            </h2>
            <h1 class="pl-0 md:pl-4 pb-1 text-[#553788]">
              <Icon
                name="heroicons:scissors-20-solid"
                class="stitch-icon h-5 w-5"
              />
              - - - - - - - - - - - - - - - - -
            </h1>
            <p class="text-gray-600 pl-0 md:pl-4 text-lg md:text-xl">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: "Paça Tadilatı",
    description:
      "Kıyafetlerinizin paçalarıyla ilgili her türlü tadilat işlemini titizlikle gerçekleştiriyoruz.",
  },
  {
    title: "Çarşaflara Lastik Takımı",
    description:
      "Çarşaf takımınıza lastik eklemek için profesyonel hizmet sunuyoruz.",
  },
  {
    title: "Arma Dikimi",
    description:
      "Kıyafetlerinizin üzerine istediğiniz armaları dikmek için hizmet veriyoruz.",
  },
  {
    title: "Fermuar İşlemleri",
    description:
      "Kıyafetlerinizin fermuarlarını tamir etmek veya değiştirmek için uzman ekibimizle yanınızdayız.",
  },
  {
    title: "Düğme Değişimi ve Tamiri",
    description:
      "Kıyafetlerinizin düğmelerini değiştirmek veya tamir etmek için size yardımcı oluyoruz.",
  },
  {
    title: "Yırtık Onarımı",
    description:
      "Kıyafetlerinizde oluşan yırtıkları düzeltmek ve onarmak için uzmanlıkla hizmet veriyoruz.",
  },
  {
    title: "Askı Takımı ve Ayarı",
    description:
      "Kıyafetlerinizin askılarını takmak, ayarlamak veya değiştirmek için bize başvurabilirsiniz.",
  },
  {
    title: "Daraltma ve Genişletme",
    description:
      "Kıyafetlerinizin bedenini daraltmak veya genişletmek istediğinizde size yardımcı oluyoruz.",
  },
  {
    title: "Etek Kısaltma ve Uzatma",
    description:
      "Kıyafetlerinizin eteğini istediğiniz uzunluğa kısaltmak veya uzatmak için profesyonel bir hizmet sunuyoruz.",
  },
  {
    title: "İplik ve Dikiş Tamiri",
    description:
      "Kıyafetlerinizdeki iplik veya dikiş sorunlarını düzeltmek için bize başvurabilirsiniz.",
  },
  {
    title: "Tüy Dökümü ve Temizliği",
    description:
      "Kaban, mont gibi kıyafetlerinizde oluşan tüy dökülmelerini temizlemek ve düzeltmek için size destek sağlıyoruz.",
  },
  {
    title: "Profesyonel Ütü Hizmetleri",
    description:
      "Deneyimli personelimiz, farklı kumaş türlerine uygun sıcaklıklar ve teknikler kullanarak giysilerinizi en iyi şekilde ütüler. Bu hizmet sayesinde zamandan tasarruf ederken her zaman şık ve profesyonel bir görünüm elde edebilirsiniz.",
  },
  {
    title: "Hızlı ve Güvenilir Kuru Temizleme Hizmetleri",
    description:
      "Kuru temizleme uzmanlarımız, özenle seçilmiş kimyasallar ve son teknoloji ekipman kullanarak giysilerinizin lekelerini çıkarır ve tazeliklerini geri kazandırır. Hassas kumaşlardan kalın giysilere kadar geniş bir yelpazede hizmet sunuyoruz. Giysilerinizin en iyi şekilde bakıldığından ve uzun ömürlü olduklarından emin olmak için bize güvenebilirsiniz.",
  },
  {
    title: "Acil Ütü ve Kuru Temizleme Hizmetleri ile Zamanın Tadını Çıkarın",
    description:
      "Aniden özel bir etkinlik veya toplantı için giysilere ihtiyacınız varsa, endişelenmeyin. Acil ütü ve kuru temizleme hizmetlerimiz sayesinde hızlı bir şekilde giysilerinizi temizleyebilir ve ütüleyebiliriz. Kaliteli sonuçlar için hızlı dönüş süreleri sunarak, beklenmedik durumlarda bile her zaman en iyi görünümünüzü yakalamanıza yardımcı olabiliriz.",
  },
];
</script>

<style scoped>
/* Gerekli stilleri buraya ekleyebilirsiniz */
</style>
