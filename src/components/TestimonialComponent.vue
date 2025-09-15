<template>
  <div
    class="w-full min-h-screen bg-gradient-to-b from-white to-yellow-50 py-16 px-6 mt-5 md:mt-15"
  >
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-6xl text-[#EAB749] mb-4">
        Testimonials
      </h2>
      <p class="text-gray-600 md:text-lg mb-12">
        Warm wishes from our partners and colleagues who are delighted to share
        in this special moment.
      </p>

      <!-- Grid Testimonial -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->
        <div
          v-for="(t, index) in testimonials"
          :key="index"
          class="bg-white border border-yellow-300 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out"
        >
          <!-- Ganti Icon dengan Logo -->
          <div
            class="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-50 border border-yellow-300 mb-4 overflow-hidden"
          >
            <img
              :src="t.logo"
              alt="CEO"
              class="w-full h-full  object-cover"
            />
          </div>

          <p class="text-gray-700 italic mb-4">
            “{{ t.message }}”
          </p>
          <h4 class="font-semibold text-yellow-700">{{ t.company }}</h4>
          <span class="text-sm text-gray-500">{{ t.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// International company testimonials with logos
const testimonials = ref([
  {
    message:
      "We are honored to support this beautiful celebration. May your journey together be filled with endless joy and love.",
    company: "GlobalTech Solutions Inc.",
    role: "Executive Management",
    logo: "https://i.pinimg.com/736x/3d/3f/8b/3d3f8bd6008b3b5e9326800e19c3c858.jpg", // ganti sesuai path logo
  },
  {
    message:
      "This wedding is truly inspiring for all of us. Congratulations on your new chapter, may your love story be everlasting.",
    company: "BrightFuture International Ltd.",
    role: "Human Resources Team",
    logo: "https://i.pinimg.com/1200x/4b/a6/db/4ba6db6ed5243c52aaf06b47755e465d.jpg",
  },
  {
    message:
      "It is a privilege to be part of this special day. Wishing you both lifelong success and happiness together.",
    company: "Evergreen Enterprises Corp.",
    role: "Board of Directors",
    logo: "https://i.pinimg.com/736x/ab/43/b6/ab43b651941adb8b17f439e0e3ae4720.jpg",
  },
]);
</script>

<style scoped>
h2 {
  font-family: Great Vibes, serif;
}
</style>
