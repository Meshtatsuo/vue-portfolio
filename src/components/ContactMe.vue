<script>
import { OhVueIcon } from "oh-vue-icons";

const modelValue = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
};

const submitForm = () => {
  console.log(modelValue);
};

export default {
  components: {
    "v-icon": OhVueIcon,
  },
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
    <div id="content" class="flex">
      <div class="flex flex-1">
        <form class="flex flex-1">
          <div id="name-area" class="flex">
            <label htmlfor="name" class="">Name: </label>
            <input
              class="flex-1"
              type="text"
              name="name"
              :value="modelValue.contactName"
              @input="(event) => (modelValue.contactName = event.target.value)"
            />
          </div>
          <div id="email-area" class="flex">
            <label htmlfor="email">Email: </label>
            <input
              class="flex-1"
              type="text"
              name="email"
              :value="modelValue.contactEmail"
              @input="(event) => (modelValue.contactEmail = event.target.value)"
            />
          </div>
          <div id="content-area" class="flex">
            <label htlmfor="message">Message: </label>
            <textarea
              class="flex-1"
              name="message"
              rows="5"
              :value="modelValue.contactMessage"
              @input="
                (event) => (modelValue.contactMessage = event.target.value)
              "
            />
          </div>
          <button v-on:click.prevent="submitForm">Submit</button>
        </form>
        <div class="flex-1 flex socials">
          <div class="social-item">
            <a
              href="https://twitter.com/TheAudioBull"
              target="_blank"
              class="flex"
            >
              <v-icon name="bi-twitter" fill="#ffffff" scale="2" />
              <h3>@TheAudioBull</h3>
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://github.com/Meshtatsuo"
              target="_blank"
              class="flex"
            >
              <v-icon name="bi-github" fill="#ffffff" scale="2" />
              <h3>Meshtatsuo</h3>
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.linkedin.com/in/dominic-w-misasi/"
              target="_blank"
              class="flex"
            >
              <v-icon name="bi-linkedin" fill="#ffffff" scale="2" />
              <h3>Dominic Misasi</h3>
            </a>
          </div>
          <div class="social-item">
            <a
              href="mailto:info@dominicmisasi.com"
              target="_blank"
              class="flex"
            >
              <v-icon name="md-email-outlined" fill="#ffffff" scale="2" />
              <h3>info@dominicmisasi.com</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.socials {
  flex-wrap: wrap;
  padding: 5% 0;
}
.social-item {
  flex: 1 100%;
  display: flex;
  align-items: center;
  margin: 0 5%;
}
.social-item a {
  width: 100%;
}

.social-item h3 {
  margin: 0 5%;
  color: white;
  font-size: 24px;
  font-weight: 200;
}

#content {
  max-width: 1400px;
  margin: auto;
}

section h2 {
  text-align: center;
  font-size: 42px;
  font-weight: 200;
  color: white;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

form {
  flex-wrap: wrap;
  margin: 2% 5%;
  justify-content: center;
  align-items: center;
  width: 40%;
}
label {
  flex: 0 20%;
}
#name-area {
  flex: 1 100%;
  margin: 2% 0;
}
#email-area {
  flex: 1 100%;

  margin: 2% 0;
}
#content-area {
  flex: 1 100%;

  margin: 2% 0;
}
label {
  color: white;
  font-size: 24px;
  font-weight: 200;
}
input {
  font-size: 24px;
  padding: 2px 3px;
  color: white;
  background-color: #111;
}

textarea {
  font-size: 24px;

  padding: 2px 3px;
  color: white;
  background-color: #111;
}

button {
  padding: 2%;
  border-radius: 10px;
  flex: 0 25%;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-size: 20px;
  font-weight: bold;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 19px;
}
</style>
