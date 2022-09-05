<script>
// Default theme
import "@splidejs/vue-splide/css";
import { portfolioItems } from "../assets/portfolio-items";
console.log(portfolioItems);

function onMove(e) {
  console.log("Moved!");
}

export default {
  data() {
    return { onMove, portfolioItems };
  },
};
</script>

<template>
  <section id="portfolio">
    <h2>My Work</h2>
    <div id="portfolio-content">
      <div class="port-section">
        <div v-if="portfolioItems">
          <Splide
            :options="{
              type: 'fade',
              height: '25em',
              direction: 'ttb',
              autoplay: 'true',
              interval: '15000',
              gap: '0',
            }"
            aria-label="My Favorite Images"
            @splide:move="onMove"
          >
            <SplideSlide
              v-for="item in portfolioItems"
              :is="carouselItem"
              :key="portfolioItems.indexOf(item)"
              class="flex"
            >
              <div class="flex-1" id="carousel-item">
                <a :href="item.repo" target="_blank">
                  <div id="image-overlay">
                    <h1>{{ item.title }}</h1>
                    <h4>{{ item.techList }}</h4>
                    <p></p>
                    <img :src="item.image" :alt="item.title" id="1" />
                  </div>
                </a>
              </div>
              <div class="flex-1 content-text" id="carousel-item">
                <p>{{ item.description }}</p>
                <a :href="item.repo" target="_blank"
                  ><p>VIEW REPOSITORY ON GITHUB</p></a
                >
              </div>
            </SplideSlide>
            <div class="splide__progress">
              <div class="splide__progress__bar" />
            </div>
          </Splide>
        </div>
        <div v-else>
          <a href="https://github.com/user/Meshtatsuo" target="_blank"
            ><h1>View my Project Repositories!</h1></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.splide__progress {
  margin: 1%;
  color: rgba(255, 255, 255, 0.3);
}

h2 {
  margin: 2%;
}
.flex {
  display: flex;
}

.content-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.content-text a {
  position: absolute;
  top: 80%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  text-align: center;
}

.content-text a:hover {
  color: #eee;
}

.flex-1 {
  flex: 1;
}

#image-overlay {
  position: relative;
}

#image-overlay h1 {
  position: absolute;
  color: white;
  margin: 1% 5%;
  left: 0;
  top: 75%;
  z-index: 3;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 1px 1px 3px black;
}

#image-overlay h4 {
  position: absolute;
  color: white;
  margin: 1% 5%;
  left: 0;
  top: 88%;
  z-index: 3;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 3px black;
}

#image-overlay p {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 2;
}

#portfolio-content {
  display: flex;
  justify-items: center;
  justify-content: center;
  padding: 0 10%;
}

#carousel-item {
  padding: 0 5%;
}

.p-5 {
  padding: 5%;
}
.port-section {
  flex: 1;
  margin: auto;
  padding: 0 2%;
}

img {
  width: 100%;
  height: auto;
}
section h2 {
  text-align: center;
  font-size: 42px;
  font-weight: 200;
  color: white;
}
</style>
