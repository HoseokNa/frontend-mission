import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders item image in image-container', () => {
    const wrapper = mount(ItemInfoPage);
    const imageContainer = wrapper.find('[data-test="item-image-container"]');

    expect(imageContainer.find('[data-test="item-image-file"]').exists()).toBe(true);
  });
});
