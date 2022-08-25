<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeaderRotation from "./components/HeaderRotation.vue";
import AboutMe from "./components/AboutMe.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
</script>

<template>
  <div id="background"></div>
  <NavBar id="nav" />
  <img
    id="dblogo"
    src="./assets/AudioBullGraphicBlackWhite.png"
    alt="devbull logo bg"
  />
  <div id="title">
    <h1>I am a :</h1>
    <h1><HeaderRotation /></h1>
  </div>

  <AboutMe />

  <PortfolioSection />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#nav {
  z-index: 2;
}

#dblogo {
  max-width: 75vw;
  transform: translateX(-25%) translateY(-15%);
  z-index: 1;
}

#title {
  color: #fff;
  font-size: 2vw;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 20%;
  left: 45%;
  width: 60vw;
}

#title h1 {
  flex: 1 100%;
}

#title span {
  color: #00aeef;
}
</style>
