<template>
  <div>
    <input v-model="message" data-test="input" />
    <button v-on:click="rotateMessage">회전</button>
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
  methods: {
    rotateMessage() {
      const string = this.message.split('');
      this.message = [...string.slice(1), string[0]].join('');
    },
  },
};
</script>
