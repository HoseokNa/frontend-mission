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
});
