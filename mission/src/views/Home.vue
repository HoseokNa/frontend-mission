<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MessageInput />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MessageInput from '@/components/MessageInput.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MessageInput,
  },
};
</script>
