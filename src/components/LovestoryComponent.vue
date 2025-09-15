<template>
  <div class="md:h-[50vh] lg:h-screen bg-white flex flex-col items-center my-6 py-10 px-4" id="love-story">
    <!-- Judul -->
    <h1 class="text-4xl md:text-6xl text-[#EAB749] mb-2" data-aos="zoom-in"  data-aos-duration="1000" 
      data-aos-easing="ease-in-out" >Our Love Story</h1>
    <p class="text-lg text-gray-500 mb-6" data-aos="zoom-in"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" >Perjalanan indah kita bersama</p>

    <!-- Section Utama: Bio + Gambar Pasangan -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full items-center" >
      <!-- Bio Pria (Kiri) -->
      <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center border border-yellow-200" data-aos="fade-right"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" >
        <img
          src="https://i.pinimg.com/1200x/a6/21/d1/a621d13f69407ffc59e1e4a36e642335.jpg"
          alt="Pria"
          class="w-28 h-28 rounded-full object-cover mb-4 shadow"
        />
        <h2 class="text-xl font-semibold text-yellow-600" data-aos="zoom-in"  data-aos-duration="2000" 
      data-aos-easing="ease-in-out" >Leo Edwin</h2>
        <p class="text-gray-600 text-center mt-2" data-aos="zoom-in"  data-aos-duration="2500" 
      data-aos-easing="ease-in-out" >
          Pria sederhana yang penuh semangat, gemar fotografi dan musik.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      <!-- Gambar Pasangan (Tengah) -->
      <div class="flex justify-center" data-aos="zoom-in"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" >
        <img
          src="https://i.pinimg.com/736x/0b/d9/4a/0bd94aa48ac33eef4117a94940514546.jpg"
          alt="Pasangan"
          class="rounded-2xl shadow-lg border-4 border-yellow-300"
        />
      </div>

      <!-- Bio Wanita (Kanan) -->
      <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center border border-yellow-200" data-aos="fade-left"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" >
        <img
          src="https://i.pinimg.com/736x/9e/83/f4/9e83f44c3dd00296049450c6f94f3fc4.jpg"
          alt="Wanita"
          class="w-28 h-28 rounded-full object-cover mb-4 shadow"
        />
        <h2 class="text-xl font-semibold text-yellow-600" data-aos="zoom-in"  data-aos-duration="2000" 
      data-aos-easing="ease-in-out" >Clara Evanie</h2>
        <p class="text-gray-600 text-center mt-2" data-aos="zoom-in"  data-aos-duration="2500" 
      data-aos-easing="ease-in-out" >
          Seorang wanita penuh kasih, suka menulis dan bercita-cita keliling dunia.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" class="text-yellow-500 hover:text-yellow-700">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Hanya tampilan, tidak ada script tambahan
</script>

<style>
/* Pastikan sudah menambahkan Font Awesome di index.html */
h1 {
    font-family: "Great Vibes", serif;
}
</style>
