<template>
  <div>
    <input v-model="message" data-test="input" />
    <p data-test="display">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',

  data() {
    return {
      message: '',
    };
  },
};
</script>
