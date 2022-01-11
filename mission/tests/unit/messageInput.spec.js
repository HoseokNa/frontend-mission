import { shallowMount } from '@vue/test-utils';
import MessageInput from '@/components/MessageInput.vue';

describe('MessageInput', () => {
  it('input창의 입력한 문자열과 display창의 문자열이 같아야 한다.', async () => {
    const wrapper = shallowMount(MessageInput);

    const TEST_MESSAGE = '사용자가 입력할거에요.';
    await wrapper.find('[data-test="input"]').setValue(TEST_MESSAGE);
    const message = wrapper.get('[data-test="display"]');

    expect(message.text()).toBe(TEST_MESSAGE);
  });

  it('회전 버튼 클릭시 문자열에 첫번째 글자가 맨 뒤로 가야 한다.', async () => {
    const ORIGINAL_MESSAGE = '12345';
    const ROTATED_MESSAGE = '23451';
    const wrapper = shallowMount(MessageInput);

    await wrapper.find('[data-test="input"]').setValue(ORIGINAL_MESSAGE);
    await wrapper.find('[data-test="rotate-button"]').trigger('click');

    const message = wrapper.get('[data-test="display"]');

    expect(message.text()).toBe(ROTATED_MESSAGE);
  });
});
