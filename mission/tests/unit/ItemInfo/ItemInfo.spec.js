import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders item image', () => {
    const testImage = 'https://d20s70j9gw443i.cloudfront.net/t_GOODS_DETAIL/https://imgb.a-bly.com/data/goods/20211220_1639937393215421m.jpg';

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          image: testImage,
        };
      },
    });

    expect(wrapper.find('img[data-test="item-image"]').attributes('src')).toBe(testImage);
  });
});
