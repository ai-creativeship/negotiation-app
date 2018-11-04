import { shallowMount, mount } from '@vue/test-utils'
import NegotiationWindowContent from '@/components/negotiation-window/NegotiationWindowContent.vue'

describe('NegotiationWindowContent.vue', () => {
  it('renders a vue instance', () => {
    const wrapper = shallowMount(NegotiationWindowContent)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders only one content at the time', () => {
    const wrapper = mount(NegotiationWindowContent)
    console.log(wrapper)
    // expect(wrapper.findAll('header.tab__header').length).toEqual(2)
  })
})
