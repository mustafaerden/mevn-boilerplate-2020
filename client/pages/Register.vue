<template>
  <div class="container my-16 mx-auto">
    <div class="max-w-md mx-auto">
      <h2 class="text-center text-3xl text-yellow-600">Register</h2>
      <div class="w-full bg-white shadow-md mt-5 p-10 rounded-sm">
        <TextInput
          v-model="inputValues.name"
          :value="inputValues.name"
          placeholder="Enter your name"
        />
        <TextInput
          v-model="inputValues.email"
          :value="inputValues.email"
          placeholder="Enter your email"
        />
        <TextInput
          type="password"
          v-model="inputValues.password"
          :value="inputValues.password"
          placeholder="Enter your password"
        />
        <button
          class="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-sm border-0"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@components/TextInput.vue";
export default {
  components: {
    TextInput
  },
  data() {
    return {
      inputValues: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>
