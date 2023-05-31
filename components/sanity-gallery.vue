<script setup>
import { ref, nextTick, onMounted } from "vue";

const sanity = useSanity();
const query = groq`*[_type == 'betty'][0]{
  slideImages[]{
    'image':asset->url,
    'assetId':asset->_id,
    _key
  }
}`;

const { data } = await useAsyncData("images", () => sanity.fetch(query));

// const slideImages = data.slideImages;
// const isArray = () => {
//   return Array.isArray(slideImages);
// };
// const countArray = slideImages.map((item, index) => {
//   return {
//     ...item,
//     count: slideImages.filter((_, i) => i === index).length,
//   };
// });

let slides;

const galleryModal = ref(null);

onMounted(async () => {
  await nextTick();
  slides = galleryModal.value.getElementsByClassName("mySlides");
});

const openModal = async () => {
  await nextTick();
  if (galleryModal.value) galleryModal.value.style.display = "block";
};

const closeModal = async () => {
  await nextTick();
  if (galleryModal.value) galleryModal.value.style.display = "none";
};

const currentSlide = (n) => {
  showSlides((slideIndex.value = n));
};

const slideIndex = ref(1);
const showSlides = (n) => {
  if (!galleryModal.value) return;
  if (n > slides.length) slideIndex.value = 1;
  if (n < 1) slideIndex.value = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex.value - 1].style.display = "block";
};

const plusSlides = (n) => {
  slideIndex.value += n;
  showSlides(slideIndex.value);
};
</script>

<template>
  <section class="gallery">
    <div class="container mx-auto px-5 py-2 lg:px-12 lg:pt-10">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div
          v-for="image in data.slideImages"
          :key="image._key"
          class="flex w-1/3 flex-wrap"
        >
          <div class="w-full p-1 md:p-2">
            <!-- <pre>{{ image }}</pre> -->
            <!-- <img
              @click="
                openModal();
                currentSlide(1);
              "
              class="block h-full w-full rounded-lg object-cover object-center"
              :src="image.image"
            /> -->
            <SanityImage
              @click="
                openModal();
                currentSlide(1);
              "
              :asset-id="image.assetId"
              auto="format"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- The Modal/Lightbox -->
    <div id="galleryModal" class="modal" ref="galleryModal">
      <span class="close cursor" @click="closeModal()">&times;</span>
      <div class="modal-content">
        <div class="mySlides">
          <div class="numbertext">1 / 12</div>
          <img
            src="/images/20230517-betty-0521.jpg"
            style="width: 100%"
            alt="Front right quarter"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 12</div>
          <img
            src="/images/20230517-betty-0523.jpg"
            style="width: 100%"
            alt="Right profile"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 12</div>
          <img
            src="/images/20230517-betty-0526.jpg"
            style="width: 100%"
            alt="Right rear quarter"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 12</div>
          <img
            src="/images/20230517-betty-0528.jpg"
            style="width: 100%"
            alt="Left rear quarter"
          />
        </div>
        <div class="mySlides">
          <div class="numbertext">5 / 12</div>
          <img
            src="/images/20230517-betty-0503.jpg"
            style="width: 100%"
            alt="Drivers side interior"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 12</div>
          <img
            src="/images/20230517-betty-0505.jpg"
            style="width: 100%"
            alt="Dashboard"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">7 / 12</div>
          <img
            src="/images/20230517-betty-0510.jpg"
            style="width: 100%"
            alt="Back seat"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">8/ 12</div>
          <img
            src="/images/20230517-betty-0513.jpg"
            style="width: 100%"
            alt="Drivers side interior - wide view"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">9 / 12</div>
          <img
            src="/images/20230517-betty-0515.jpg"
            style="width: 100%"
            alt="Back door interior"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">10 / 12</div>
          <img
            src="/images/20230517-betty-0517.jpg"
            style="width: 100%"
            alt="Passenger side interior"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">11 / 12</div>
          <img
            src="/images/20230517-betty-0518.jpg"
            style="width: 100%"
            alt="Front left quarter"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">12 / 12</div>
          <img
            src="/images/20230517-betty-0533.jpg"
            style="width: 100%"
            alt="Engine bay"
          />
        </div>

        <!-- Next/previous controls -->
        <a
          class="prev"
          @click="plusSlides(-1)"
          aria-label="previous"
          rel="nofollow"
          >&#10094;</a
        >
        <a class="next" @click="plusSlides(1)" aria-label="next" rel="nofollow"
          >&#10095;</a
        >

        <!-- Caption text -->
        <div class="caption-container">
          <p id="caption"></p>
        </div>

        <!-- Thumbnail image controls -->
        <!-- <div class="thumbnails">
          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0503.jpg"
              @click="currentSlide(1)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0505.jpg"
              @click="currentSlide(2)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0510.jpg"
              @click="currentSlide(3)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0513.jpg"
              @click="currentSlide(4)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0515.jpg"
              @click="currentSlide(5)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0517.jpg"
              @click="currentSlide(6)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0518.jpg"
              @click="currentSlide(7)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0521.jpg"
              @click="currentSlide(8)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0523.jpg"
              @click="currentSlide(9)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0526.jpg"
              @click="currentSlide(10)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0528.jpg"
              @click="currentSlide(11)"
            />
          </div>

          <div class="column">
            <img
              class="demo"
              src="/images/20230517-betty-0533.jpg"
              @click="currentSlide(12)"
            />
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.thumbnails {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, min-max(175px, 225px));
}
/* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 100%;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 65;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
