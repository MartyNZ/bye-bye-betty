<template>
  <div
    id="carouselCrossfade"
    class="relative"
    data-te-carousel-init
    data-te-carousel-slide="carousel"
    data-te-carousel-pause:false
  >
    <div
      class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      <!--First item-->
      <div
        class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
        data-te-carousel-active
      >
        <nuxt-img
          src="/images/20230517-betty-0521_carousel.jpg"
          class="block object-cover"
          alt="Jeep 2003 TJ Wrangler Renegade"
        />
      </div>
      <!--Second item-->
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <nuxt-img
          src="/images/20230517-betty-0523_carousel.jpg"
          class="block object-cover"
          alt="Jeep 2003 TJ Wrangler Renegade"
        />
      </div>
      <!--Third item-->
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <nuxt-img
          src="/images/20230517-betty-0526_carousel.jpg"
          class="block object-cover"
          alt="Jeep 2003 TJ Wrangler Renegade"
        />
      </div>
      <!--Fourth item-->
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <nuxt-img
          src="/images/20230517-betty-0528_carousel.jpg"
          class="block object-cover"
          alt="Jeep 2003 TJ Wrangler Renegade"
        />
      </div>
      <!--Fifth item-->
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
      >
        <nuxt-img
          src="/images/20230517-betty-0513_carousel.jpg"
          class="block object-cover"
          alt="Jeep 2003 TJ Wrangler Renegade"
        />
      </div>

      <!--Overlay-->
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed bg-opacity-50 z-10"
      >
        <div class="relative grid h-full items-center justify-center">
          <div
            class="mx-2 text-white text-center opacity-100 font-extrabold text-2xl mt-3 md:mt-2 sm:text-5xl md:text-7xl lg:text-7xl"
          >
            A Classic still in it's prime.
          </div>
          <div
            class="text-white text-center opacity-100 font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl"
          >
            2003 Jeep TJ.II Wrangler Renegade
          </div>
        </div>
        <div
          class="absolute bg-opacity-70 bg-yellow-500 top-0 right-0 left-0 w-full font-bold py-1 text-center text-opacity-100 text-xl sm:text-2xl md:text-4xl md:py-4 lg:text-6xl z-20"
        >
          <!--style="transform: translate(50%, 50%) rotate(45deg)"-->
          Preparing for Private Sale!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Carousel, Ripple, initTE } from "tw-elements";

onMounted(() => {
  initTE({ Carousel, Ripple });
});
</script>

<style lang="scss" scoped></style>
