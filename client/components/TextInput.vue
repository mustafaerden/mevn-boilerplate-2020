<template>
  <input
    class="w-full bg-gray-200 p-3 mb-4 text-gray-700 focus:outline-none focus:shadow-outline"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
