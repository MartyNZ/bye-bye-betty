<script setup>
// defineOgImageStatic({
//   component: "BettyOgImage",
//   title: "2003 TJ.II Jeep Wrangler Renegade | A classic still in it's prime.",
// });
</script>

<template>
  <div>
    <VitePwaManifest />
    <SeoKit />
    <div class="page">
      <main>
        <div id="headline">
          <h1>2003 TJ.II Jeep Wrangler Renegade</h1>
        </div>
        <div id="carousel">
          <ClientOnly>
            <!-- <SanityCarousel /> -->
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
            <!-- <SanityGallery /> -->
            <Gallery />
          </ClientOnly>
        </div>
        <div id="register">
          <ClientOnly>
            <FormsRegister />
          </ClientOnly>
        </div>
        <div id="information">
          <Information />

          <img src="/images/qrcode.png" />
        </div>
      </main>

      <footer>
        <AppFooter />
      </footer>
    </div>
  </div>
</template>

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

.error {
  border: 1px solid red;
}
.page {
  display: grid;
  grid-template-rows: 1fr auto;
  max-width: 100%;
  main {
    width: 100%;
    display: grid;
    gap: 0.75rem;
    // grid-template-columns: 1fr;
    // grid-template-rows: repeat(5, auto);
    grid-template-areas: "carousel" "overview" "details" "gallery" "register" "information";

    #headline {
      display: none;
    }
    #carousel {
      grid-area: carousel;
    }
    #overview {
      grid-area: overview;
    }
    #details {
      grid-area: details;
      overflow: hidden;
    }
    #gallery {
      grid-area: gallery;
    }
    #register {
      grid-area: register;
    }
    #information {
      grid-area: information;
      img {
        display: none;
      }
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
      "register register information";
  }
}
@media only print {
  :root {
    h1,
    h3,
    h5 {
      padding: 0.5rem 0.75rem;
      font-weight: 500;
    }
    h2,
    h4,
    h6 {
      padding: 0.5rem 0.75rem;
      font-weight: 300;
      font-style: italic;
    }
    font-family: system-ui;
    .page {
      main {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "headline headline"
          "overview gallery"
          "details information";

        #headline {
          grid-area: headline;
          display: block;
          text-align: center;
        }

        #information {
          text-align: center;
          img {
            max-width: 20ch;
            height: auto;
            display: inline;
            margin-inline: auto;
          }
        }

        #carousel {
          display: none !important;
        }
        #register {
          display: none !important;
        }
      }
      footer {
        display: none !important;
      }
    }
  }
}
</style>
