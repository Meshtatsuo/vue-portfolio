<script>
import { ref } from "vue";

const state = ref("full-stack");
state.value = "full-stack";
setInterval(() => {
  if (state.value === "full-stack") {
    state.value = "front-end";
  } else if (state.value === "front-end") {
    state.value = "sound-engineer";
  } else {
    state.value = "full-stack";
  }
}, 3000);

export default {
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <Transition name="slide-up">
    <span v-if="state === 'full-stack'">Full Stack Developer</span>
    <span v-else-if="state === 'front-end'">Front End Designer</span>
    <span v-else-if="state === 'sound-engineer'">Sound Engineer</span>
  </Transition>
</template>

<style scoped>
span {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
