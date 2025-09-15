<template>
  <div class="flex justify-center items-center flex-col w-full h-screen md:h-[70vh] p-4">
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-6xl mb-5 tracking-wider" data-aos="zoom-in"  data-aos-duration="1000" 
      data-aos-easing="ease-in-out" >October 20th, 2027</h1>
      <h2 class="text-base md:text-lg mb-2"data-aos="zoom-in"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" >Luxurious Hotel Leary</h2>
      <h3 class="text-base md:text-lg mb-6"data-aos="zoom-in"  data-aos-duration="2000" 
      data-aos-easing="ease-in-out" >Algroious Way No.112</h3>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl" data-aos="zoom-in"  data-aos-duration="2500" 
      data-aos-easing="ease-in-out" >
      <div
        class="flex flex-col justify-center items-center p-6 sm:p-8 border-2 border-amber-200 rounded-2xl bg-white shadow-md"
      >
        <p class="text-5xl sm:text-6xl md:text-7xl">{{ days }}</p>
        <h4 class="text-xl sm:text-2xl md:text-3xl mt-3">Days</h4>
      </div>

      <div
        class="flex flex-col justify-center items-center p-6 sm:p-8 border-2 border-amber-200 rounded-2xl bg-white shadow-md"
      >
        <p class="text-5xl sm:text-6xl md:text-7xl">{{ hours }}</p>
        <h4 class="text-xl sm:text-2xl md:text-3xl mt-3">Hours</h4>
      </div>

      <div
        class="flex flex-col justify-center items-center p-6 sm:p-8 border-2 border-amber-200 rounded-2xl bg-white shadow-md"
      >
        <p class="text-5xl sm:text-6xl md:text-7xl">{{ minutes }}</p>
        <h4 class="text-xl sm:text-2xl md:text-3xl mt-3">Minutes</h4>
      </div>

      <div
        class="flex flex-col justify-center items-center p-6 sm:p-8 border-2 border-amber-200 rounded-2xl bg-white shadow-md"
      >
        <p class="text-5xl sm:text-6xl md:text-7xl">{{ seconds }}</p>
        <h4 class="text-xl sm:text-2xl md:text-3xl mt-3">Seconds</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    // Set target tanggal/waktu untuk countdown
    const targetDate = new Date("2025-12-31T23:59:59").getTime();
    let timer = null;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        days.value = hours.value = minutes.value = seconds.value = 0;
        clearInterval(timer);
        return;
      }

      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    };

    onMounted(() => {
      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { days, hours, minutes, seconds };
  },
};
</script>

<style lang="scss" scoped>
p,
h3 {
  font-family: "Playfair Display", serif;
  color: var(--gold-color);
}
h2 {
  font-family: "Playfair Display", serif;
  color: var(--grey-color);
  text-align: center;
}

h4 {
  font-family: "Great Vibes";
  color: var(--grey-color);
  text-align: center;
}

h1 {
  font-family: "Great Vibes", cursive;
  color: var(--gold-color);
}
</style>
