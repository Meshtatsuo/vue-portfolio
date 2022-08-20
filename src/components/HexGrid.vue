<script>
const alpha = ".2";
const fillColor = `rgba(0,138,235,${alpha}})`;
export default {
  data() {
    return {
      fillColor,
    };
  },
};
</script>

<template>
  <div class="main">
    <div class="container">
      <svg width="400" height="110">
        <rect
          width="300"
          height="300"
          style="fill: {{fillColor}}; stroke-width: 3; stroke: rgb(0, 0, 0)"
        />
      </svg>
    </div>
  </div>
</template>

<style>
.main {
  display: flex;
  width: 100vw;
  margin: 0;
  --s: 100px; /* size  */
  --m: 4px; /* margin */
  --f: calc(var(--s) * 1.732 + 4 * var(--m) - 1px);
}

.container {
  font-size: 0; /* disable white space between inline block element */
}

.container svg {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
}

.container::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
    #0000 0 calc(var(--f) - 3px),
    #000 0 var(--f)
  );
}
</style>
