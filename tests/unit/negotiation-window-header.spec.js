import { mount } from '@vue/test-utils'
import NegotiationWindowHeader from '@/components/negotiation-window/NegotiationWindowHeader.vue'

describe('NegotiationWindowHeader.vue', () => {
  it('renders two tab headers', () => {
    const wrapper = mount(NegotiationWindowHeader)

    expect(wrapper.findAll('header.tab__header').length).toEqual(2)
  })

  it('renders tab headers titles with default values of props.tabsTitles', () => {
    const wrapper = mount(NegotiationWindowHeader)

    expect(wrapper.findAll('header.tab__header').at(0).text()).toBeDefined()
    expect(wrapper.findAll('header.tab__header').at(1).text()).toBeDefined()
  })

  it('renders tab headers titles with given props.tabsTitles', () => {
    const tabsTitles = {
      employerTab: 'Custom Employer Tab',
      employeeTab: 'Custom Employee Tab'
    }

    const wrapper = mount(NegotiationWindowHeader,
      {
        propsData: {
          tabsTitles
        }
      }
    )

    expect(wrapper.findAll('header.tab__header').at(0).text()).toEqual(tabsTitles.employerTab)
    expect(wrapper.findAll('header.tab__header').at(1).text()).toEqual(tabsTitles.employeeTab)
  })
})
