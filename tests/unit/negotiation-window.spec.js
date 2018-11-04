import { shallowMount } from '@vue/test-utils'
import NegotiationWindow from '@/components/NegotiationWindow.vue'

describe('NegotiationWindow.vue', () => {
  it('renders a vue instance', () => {
    const wrapper = shallowMount(NegotiationWindow)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
