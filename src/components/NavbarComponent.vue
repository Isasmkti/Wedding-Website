<template>
  <div>
    <nav
      :class="scrollY > 40
        ? 'flex flex-wrap justify-between items-center bg-white text-black p-4 fixed top-0 left-0 right-0 z-10 shadow-lg shadow-amber-200/40 transition-all duration-400 ease-in'
        : 'flex flex-wrap justify-between items-center text-white p-4 fixed top-0 left-0 right-0 z-10 transition-all duration-400 ease-in '"
    >
      <!-- Logo -->
      <div class="flex items-center relative">
        <img
          src="../assets/AtasanTeks-removebg-preview.png"
          alt="gambar daun"
          class="w-10 sm:w-10 h-auto "
        />
        <h1 class="text-[#f7ca87] text-xl sm:text-2xl ml-2">L & C</h1>
      </div>

      <!-- Hamburger button (mobile) -->
      <button
        class="sm:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <span
          :class="isOpen ? 'rotate-45 translate-y-1 w-6 h-0.5 bg-current' : 'w-6 h-0.5 bg-current'"
        ></span>
        <span
          :class="isOpen ? 'opacity-0' : 'w-6 h-0.5 bg-current'"
        ></span>
        <span
          :class="isOpen ? '-rotate-45 -translate-y-1 w-6 h-0.5 bg-current' : 'w-6 h-0.5 bg-current'"
        ></span>
      </button>

      <!-- Menu links -->
      <ul
        :class="[
          'flex-col sm:flex-row sm:flex gap-6 sm:gap-8 font-semibold',
          isOpen ? 'flex mt-4 w-full sm:w-auto' : 'hidden sm:flex'
        ]"
      >
        <li><a href="#love-story">Love Story</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#rsvp">RSVP</a></li>
        <li><a href="#letter">Letter</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);
const isOpen = ref(false);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
h1 {
  font-family: "Great Vibes", cursive;
  word-spacing: 0.5rem;
}
li a {
  position: relative;
  text-decoration: none;
  font-weight: bold;
  padding: 4px 0;
  transition: color 0.3s ease;
}

/* Garis bawah animasi */
li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

li a:hover::after {
  transform: scaleX(1);
  opacity: 0.5;
  background-color: var(--gold-color);
}

li a:hover {
  color: var(--gold-color);
}
</style>
