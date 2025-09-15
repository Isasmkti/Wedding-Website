<template>
  <div class="w-screen h-screen pt-15" id="hero">
    <div class="flex flex-col relative justify-center items-center h-screen bg-center">
      <div class="w-90 md:w-150 h-auto">
        <h1 
          class="text-center text-6xl" data-aos="zoom-in"  data-aos-duration="1500" 
      data-aos-easing="ease-in-out" 
        >
          Leo & Clara
        </h1>
       
        <p 
          class="text-center text-base sm:text-sm md:text-lg  mt-10"  data-aos="zoom-in"  data-aos-duration="2000" 
      data-aos-easing="ease-in-out" 
        >
          "In the garden of life, love blooms. 
          Come witness our love as we vow to grow together forever."
        </p>
      </div>
      <div 
        class="shadow-lg p-3 rounded-lg mt-3 bg-white" data-aos="fade-in"  data-aos-duration="2000" 
      data-aos-easing="ease-in-out"
      >
        <a href="http://">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
#hero {
  background-image: url(https://i.pinimg.com/1200x/5f/06/c6/5f06c68515635fce7716ab52f44bd06c.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  .flex {
    div {
      h1 {
        font-family: Poppins;
        color: white;
      }

      p {
        font-family: Playfair Display;
        color: white;
      }

      a {
        color: var(--gold-color);
      }
    }
  }
}
</style>
