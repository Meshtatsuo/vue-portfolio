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
              type: 'loop',
              height: '400px',
              direction: 'ttb',
              arrows: 'false',
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
                  <img :src="item.image" :alt="item.title" id="1" />
                </a>
              </div>
              <div class="flex-1" id="carousel-item">
                <h1>{{ item.title }}</h1>
                <h4>{{ item.techList }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </SplideSlide>
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
.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

#portfolio-content {
  display: flex;
  justify-items: center;
  justify-content: center;
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
  padding: 5%;
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
