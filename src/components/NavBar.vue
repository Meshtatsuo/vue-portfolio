<script lang="ts">
export default {
  components: {},
};
</script>

<template>
  <nav>
    <div id="nav-container">
      <h1>DOMINIC MISASI</h1>
      <ul>
        <a href="#about"><li>ABOUT</li></a>
        <a href="#portfolio"><li>PORTFOLIO</li></a>
        <a href="#contact"><li>CONTACT</li></a>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100vw;
  margin: 0 auto;
  padding: 0 15%;
  background-image: url("../assets/carbon3_light.jpg");
  background-repeat: repeat;
}
#nav-container {
  display: flex;
  align-items: center;
}
h1 {
  flex: 1;
  font-size: 36px;
  color: white;
  font-weight: 100;
}
ul {
  flex: 1;
  list-style-type: none;
  display: flex;
}

ul a {
  flex: 1;
  margin: 0 5%;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 100;
}
</style>
