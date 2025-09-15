<template>
    <div class="h-full bg-white text-gray-800 flex flex-col overflow-hidden">
        <!-- Header Save The Date -->
        <div class="flex flex-col items-center gap-3 justify-center h-[80vh] bg-cover bg-center bg-no-repeat bg-[url('https://i.pinimg.com/1200x/aa/c0/66/aac066445e141518a95435a75e2523cd.jpg')] w-full px-4 text-center"
            data-aos="fade-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
            <h1 class="text-5xl sm:text-7xl lg:text-8xl font-light text-white" data-aos="zoom-in"
                data-aos-duration="1500" data-aos-easing="ease-in-out">
                Save The Date
            </h1>
            <p class="text-lg sm:text-2xl mt-2 font-[Playfair-Display] text-white max-w-xl" data-aos="zoom-in"
                data-aos-duration="2000" data-aos-easing="ease-in-out">
                "Don’t miss our unforgettable day"
            </p>

            <!-- Tombol Save to Calendar -->
            <div class="mt-5" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out">
                <a :href="calendarUrl" target="_blank" rel="noopener noreferrer"
                    class="mt-4 bg-yellow-500 text-white text-base sm:text-xl px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition">
                    Add To Calendar
                </a>
            </div>
        </div>

        <!-- Timeline Row -->
        <div class="flex flex-col items-center justify-center w-full h-full py-20 relative px-4" id="timeline">
            <!-- Dekorasi -->
            <img src="../assets/Bunga-removebg-preview.png" alt=""
                class="hidden sm:block w-28 lg:w-40 h-auto absolute top-5 left-15 rotate-60" data-aos="fade-down-right"
                data-aos-duration="2500" data-aos-easing="ease-in-out" />
            <img src="../assets/Bunga-removebg-preview.png" alt=""
                class="hidden sm:block w-28 lg:w-40 h-auto absolute top-5 right-15 -rotate-30" data-aos="fade-down-left"
                data-aos-duration="2500" data-aos-easing="ease-in-out" />

            <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <h1 class="text-3xl md:text-6xl text-yellow-500">Timeline Event</h1>
            </div>

            <!-- Item 1 -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 mt-10 mb-10 max-w-4xl p-6 text-center sm:text-left"
                data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <i class="fa-solid fa-ring text-6xl sm:text-8xl text-[#EAB749]"></i>
                <div class="max-w-xl">
                    <h3 class="font-[Playfair-Display] text-2xl sm:text-3xl">CEREMONY</h3>
                    <h4 class="text-xl sm:text-2xl font-[Great-Vibes] text-[#EAB749]">
                        Wedding
                    </h4>
                    <p class="text-sm md:text-xl text-gray-400 sm:text-base font-[Serif]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                        nemo at ratione iste vero, neque beatae sit laboriosam delectus.
                    </p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 mt-10 mb-10 max-w-4xl p-6 text-center sm:text-right"
                data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div class="max-w-xl order-2 sm:order-1">
                    <h3 class="font-[Playfair-Display] text-2xl sm:text-3xl">
                        TOAST & DINNER
                    </h3>
                    <h4 class="text-xl sm:text-2xl font-[Great-Vibes] text-[#EAB749]">
                        Wedding
                    </h4>
                    <p class="text-sm md:text-xl text-gray-400 sm:text-base font-[Serif]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                        nemo at ratione iste vero, neque beatae sit laboriosam delectus.
                    </p>
                </div>
                <i class="fa-solid fa-champagne-glasses text-6xl sm:text-8xl text-[#EAB749] order-1 sm:order-2"></i>
            </div>

            <!-- Item 3 -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 mt-10 mb-10 max-w-4xl p-6 text-center sm:text-left"
                data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <i class="fa-solid fa-camera text-6xl sm:text-8xl text-[#EAB749]"></i>
                <div class="max-w-xl">
                    <h3 class="font-[Playfair-Display] text-2xl sm:text-3xl">
                        PHOTOGRAPHY
                    </h3>
                    <h4 class="text-xl sm:text-2xl font-[Great-Vibes] text-[#EAB749]">
                        Wedding
                    </h4>
                    <p class="text-sm md:text-xl text-gray-400 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                        nemo at ratione iste vero, neque beatae sit laboriosam delectus.
                    </p>
                </div>
            </div>

            <!-- Item 4 -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 mt-10 mb-10 max-w-4xl p-6 text-center sm:text-right"
                data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div class="max-w-xl order-2 sm:order-1">
                    <h3 class="font-[Playfair-Display] text-2xl sm:text-3xl">
                        WEDDING CAKE
                    </h3>
                    <h4 class="text-xl sm:text-2xl font-[Great-Vibes] text-[#EAB749]">
                        Wedding
                    </h4>
                    <p class="text-sm md:text-xl text-gray-400 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                        nemo at ratione iste vero, neque beatae sit laboriosam delectus.
                    </p>
                </div>
                <i class="fa-solid fa-utensils text-6xl sm:text-8xl text-[#EAB749] order-1 sm:order-2"></i>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TimelineComponent",
    computed: {
        // Google Calendar URL
        calendarUrl() {
            const title = encodeURIComponent("Pernikahan Rina & Budi");
            const details = encodeURIComponent(
                "Undangan pernikahan Rina & Budi. Jangan lewatkan!"
            );
            const location = encodeURIComponent("Gedung Serbaguna, Jakarta");
            // Format waktu UTC: YYYYMMDDTHHmmssZ (contoh: 20251212T003000Z untuk 07.30 WIB)
            const start = "20251212T003000Z";
            const end = "20251212T070000Z";
            return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
        },
    },
};
</script>

<style lang="scss" scoped>
h1 {
    font-family: "Great Vibes", serif;
}

h3 {
    font-family: "Libre Baskerville", serif;
}

p {
    font-family: "Playfair Display", serif;
}
</style>
