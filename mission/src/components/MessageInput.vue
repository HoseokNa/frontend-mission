<template>
  <div>
    <input v-model="message" data-test="input" />
    <button v-on:click="rotateMessage" data-test="rotate-button">회전</button>
    <button v-on:click="alertMessage" data-test="alert-button">제출</button>
    <p data-test="display">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',

  data() {
    return {
      message: '',
      countingClick: 0,
    };
  },
  methods: {
    rotateMessage() {
      const string = this.message.split('');
      this.message = [...string.slice(1), string[0]].join('');
    },
    alertMessage() {
      this.countingClick += 1;

      // eslint-disable-next-line no-alert
      alert(`${this.message} : ${this.countingClick}`);
    },
  },
};
</script>
