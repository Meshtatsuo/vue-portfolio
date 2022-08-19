<script></script>

<template>
  <section>
    <h2>About Me</h2>
    <div id="about">
      <p id="about-text">Test stuff</p>
      <p id="about-img">Image section</p>
    </div>
  </section>
</template>

<style>
section h2 {
  text-align: center;
  font-size: 36px;
  font-weight: 100;
  color: white;
}
#about {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
}

#about-text {
  flex: 1;
}

#about-img {
  flex: 1;
}
</style>
