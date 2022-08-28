<script>
const modelValue = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
};

const submitForm = () => {
  console.log(modelValue);
};

export default {
  data() {
    return {
      modelValue,
      submitForm,
    };
  },
};
</script>

<template>
  <section id="contact">
    <h2>Contact</h2>
    <div class="flex">
      <div class="flex-1">
        <form>
          <label htmlfor="name">Name: </label>
          <input
            type="text"
            name="name"
            :value="modelValue.contactName"
            @input="(event) => (modelValue.contactName = event.target.value)"
          />
          <label htmlfor="email">Email: </label>
          <input
            type="text"
            name="email"
            :value="modelValue.contactEmail"
            @input="(event) => (modelValue.contactEmail = event.target.value)"
          />
          <label htlmfor="message">Message: </label>
          <textarea
            name="message"
            :value="modelValue.contactMessage"
            @input="(event) => (modelValue.contactMessage = event.target.value)"
          />
          <button v-on:click.prevent="submitForm">Submit</button>
        </form>
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
</style>
