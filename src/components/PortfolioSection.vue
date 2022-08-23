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
    return { onMove };
  },
};
</script>

<template>
  <section id="portfolio">
    <h2>My Work</h2>
    <div id="portfolio-content">
      <div class="port-section">
        <Splide
          :options="{
            type: 'loop',
            height: '500px',
            direction: 'ttb',
          }"
          aria-label="My Favorite Images"
          @splide:move="onMove"
        >
          <SplideSlide>
            <img
              src="../assets/portfolio-images/fixture.png"
              alt="Sample 1"
              id="1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/portfolio-images/llama-player.png"
              alt="Sample 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/portfolio-images/medician-blog.png"
              alt="Sample 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/portfolio-images/mental-health-check.png"
              alt="Sample 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/portfolio-images/national-park.png"
              alt="Sample 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/portfolio-images/PI_PhotoReviewer.png"
              alt="Sample 2"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div class="port-section">Hi</div>
    </div>
  </section>
</template>

<style scoped>
#portfolio-content {
  display: flex;
  justify-items: center;
  justify-content: center;
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
