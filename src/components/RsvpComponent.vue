<script setup>
import { ref, onMounted } from "vue";

const name = ref("");
const attendance = ref("Hadir");
const message = ref("");
const rsvps = ref([]);

const API_URL = "http://localhost:4000/rsvps";

// ambil semua data RSVP
const fetchRSVPs = async () => {
  const res = await fetch(API_URL);
  rsvps.value = await res.json();
};

// kirim RSVP baru
const submitRSVP = async () => {
  if (!name.value.trim()) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      attendance: attendance.value,
      message: message.value,
    }),
  });
  await fetchRSVPs();

  // reset form
  name.value = "";
  attendance.value = "Hadir";
  message.value = "";
};

onMounted(() => fetchRSVPs());
</script>

<template>
  <div class="my-10 py-5" id="rsvp" data-aos="fade-in" data-aos-duration="2500" 
      data-aos-easing="ease-in-out">
    <div class="w-90 sm:w-sm md:w-3xl lg:w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-yellow-300">
      <h1 class="text-4xl md:text-5xl mb-6 text-center text-yellow-500 font-[Great-Vibes]">
        Rsvp attendance
      </h1>

      <!-- Form -->
      <form @submit.prevent="submitRSVP" class="space-y-4">
        <input v-model="name" type="text" placeholder="Nama Lengkap"
          class="w-full border border-yellow-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />

        <select v-model="attendance"
          class="w-full border border-yellow-300 p-3 rounded-lg bg-white focus:ring-2 focus:ring-yellow-500 focus:outline-none">
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>

        <textarea v-model="message" placeholder="Ucapan untuk mempelai"
          class="w-full border border-yellow-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          rows="3"></textarea>

        <button type="submit"
          class="w-full bg-yellow-500 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Kirim RSVP
        </button>
      </form>

      <!-- Daftar RSVP -->
      <div v-if="rsvps.length" class="mt-8 md:mt-10">
        <h1 class="text-4xl md:text-5xl tracking-wider mb-3 text-yellow-500 text-center">
          List Rsvp
        </h1>
        <ul class="space-y-4">
          <li v-for="r in rsvps" :key="r.id" class="bg-white border border-yellow-200 p-4 rounded-lg shadow-sm">
            <p class="font-bold text-yellow-800">
              {{ r.name }}
              <span class="text-sm text-gray-600"> ({{ r.attendance }})</span>
            </p>
            <p v-if="r.message" class="mt-1 text-gray-700 italic">
              “{{ r.message }}”
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
