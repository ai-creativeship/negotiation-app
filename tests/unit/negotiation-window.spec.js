import { shallowMount, mount } from '@vue/test-utils'
import NegotiationWindow from '@/components/negotiation-window/NegotiationWindow.vue'

describe('NegotiationWindow.vue', () => {
  it('renders a vue instance', () => {
    const wrapper = shallowMount(NegotiationWindow)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('has active tab initially', () => {
    const wrapper = mount(NegotiationWindow)

    const initialActiveTab = wrapper.vm.activeTab

    expect(wrapper.vm.activeTab).toBe(initialActiveTab)
  })

  it('changes active tab on header click', () => {
    const wrapper = mount(NegotiationWindow)

    const initialActiveTab = wrapper.vm.activeTab

    wrapper.findAll('header.tab__header').at(1).trigger('click')
    expect(wrapper.vm.activeTab).not.toBe(initialActiveTab)

    wrapper.findAll('header.tab__header').at(0).trigger('click')
    expect(wrapper.vm.activeTab).toBe(initialActiveTab)
  })
})
