<template>
  <div>
    <!-- <SeoKit />
    <OgImageScreenshot />
    <OgImageStatic /> -->
    <div class="page">
      <main>
        <div id="carousel">
          <ClientOnly>
            <Carousel />
          </ClientOnly>
        </div>
        <div id="overview">
          <Overview />
        </div>
        <div id="details">
          <Details />
        </div>
        <div id="gallery">
          <ClientOnly>
            <Gallery />
          </ClientOnly>
        </div>
        <div id="register">
          <!-- <ClientOnly> -->
          <!-- <FormsRegister /> -->
          <!-- </ClientOnly> -->
        </div>
        <div id="information">
          <Information />
        </div>
      </main>

      <footer>
        <AppFooter />
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
:root {
  h1,
  h3,
  h5 {
    padding: 0.5rem 0.75rem;
    font-weight: 700;
  }
  h2,
  h4,
  h6 {
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-style: italic;
  }
  h6 {
    font-size: 0.85rem;
  }
  h5 {
    font-size: 1rem;
  }
  h4 {
    font-size: 1.125rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 2rem;
  }
}
.page {
  display: grid;
  grid-template-rows: 1fr auto;
  max-width: 100dvw;
  max-width: 100vw;
  main {
    width: 100%;
    display: grid;
    gap: 0.75rem;
    // grid-template-columns: 1fr;
    // grid-template-rows: repeat(5, auto);
    grid-template-areas: "carousel" "overview" "details" "gallery" "register" "information";
    #carousel {
      grid-area: carousel;
    }
    #overview {
      grid-area: overview;
    }
    #details {
      grid-area: details;
    }
    #gallery {
      grid-area: gallery;
    }
    #register {
      grid-area: register;
    }
    #information {
      grid-area: information;
    }
    #footer {
      grid-area: footer;
    }
  }
}
@media (min-width: 1024px) {
  .page main {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "carousel carousel carousel"
      "overview overview overview"
      "details gallery gallery"
      "register gallery gallery"
      "information information information";
  }
}
</style>
