<template>
    <section class="w-full bg-white py-12 px-4" id="gallery">
        <div class="max-w-6xl mx-auto flex flex-col items-center">
            <h1 class="text-4xl text-[#EAB749] md:text-5xl sm:text-4xl font-[Playfair-Display] mb-4 text-center" data-aos="zoom-in" data-aos-duration="2000" 
      data-aos-easing="ease-in-out">
                Our Gallery
            </h1>
            <h2 class="text-gray-400 text-base md:text-xl text-center" data-aos="zoom-in" data-aos-duration="2500" 
      data-aos-easing="ease-in-out">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cupiditate asperiores qui sit maiores
                facere temporibus consequatur, eligendi a adipisci exercitationem, praesentium ab velit magnam modi
                ipsam! Autem, necessitatibus iure.</h2>

            <!-- Landscape image -->
            <div class="w-full mb-6 mt-6" data-aos="zoom-in" data-aos-duration="1500" 
      data-aos-easing="ease-in-out">
                <img src="https://i.pinimg.com/1200x/3f/0c/79/3f0c79333ba8f49cd90c13bcc603c662.jpg" alt="Landscape"
                    class="w-full h-64 sm:h-96 object-cover rounded-xl shadow-md" />
            </div>

            <!-- Portrait grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div data-aos="zoom-in" data-aos-duration="2000" 
      data-aos-easing="ease-in-out">
                    <img src="https://i.pinimg.com/736x/6c/27/79/6c2779f29ab07e0da078ddddc97af9d7.jpg" alt="Portrait 1"
                        class="w-full h-96 object-cover rounded-xl shadow-md" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="2500" 
      data-aos-easing="ease-in-out">
                    <img src="https://i.pinimg.com/1200x/08/84/df/0884dfb350838f39aa1a3e33c0e029ae.jpg" alt="Portrait 2"
                        class="w-full h-96 object-cover rounded-xl shadow-md" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" 
      data-aos-easing="ease-in-out">
                    <img src="https://i.pinimg.com/736x/de/4d/ed/de4ded6b4a6b4817fdaf1f78c5efd86e.jpg" alt="Portrait 3"
                        class="w-full h-96 object-cover rounded-xl shadow-md" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "GallerySection",
};
</script>

<style scoped>
</style>
