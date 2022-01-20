<template>
  <div id="item-info-page">
    <div class="image-container">
      <img data-test="item-image" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      image:
        'https://d20s70j9gw443i.cloudfront.net/t_GOODS_DETAIL/https://imgb.a-bly.com/data/goods/20211220_1639937393215421m.jpg',
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
