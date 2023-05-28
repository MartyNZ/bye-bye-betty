<template>
  <!-- <div id="carouselCrossfade"> -->
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
    style="display-none"
  >
    <!--Item-->
    <div>
      <img
        src="/images/bettyOgImage.png"
        alt="Jeep 2003 TJ Wrangler Renegade"
        width="1200"
        height="630"
      />
    </div>

    <!--Overlay-->
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed bg-opacity-10 z-10"
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
        Private Sale!
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
