import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import NegotiationWindowHeader from '@/components/negotiation-window/NegotiationWindowHeader.vue'
import sourceMutations from '@/store/modules/general/mutations.js'
import TabHeader from '@/components/negotiation-window/tab/TabHeader.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NegotiationWindowHeader.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    state = {
      general: {
        activeTab: ''
      }
    }
    mutations = {
      'general/SET_ACTIVE_TAB': sourceMutations.SET_ACTIVE_TAB
    }
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('renders a vue instance', () => {
    const wrapper = shallowMount(NegotiationWindowHeader, {
      store,
      localVue,
      stubs: [
        'tab-header'
      ]
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders two tab headers', () => {
    const wrapper = mount(NegotiationWindowHeader, {
      store,
      localVue,
      stubs: {
        'tab-header': TabHeader
      }
    })

    expect(wrapper.findAll('header.tab__header').length).toEqual(2)
  })

  it('changes active tab on header click', () => {
    const wrapper = mount(NegotiationWindowHeader, {
      store,
      localVue,
      stubs: {
        'tab-header': TabHeader
      }
    })

    const initialActiveTab = store.state.activeTab
    wrapper.findAll('header.tab__header').at(1).trigger('click')
    const firstClickActiveTab = store.state.activeTab
    expect(firstClickActiveTab).not.toEqual(initialActiveTab)

    wrapper.findAll('header.tab__header').at(0).trigger('click')
    const secondClickActiveTab = store.state.activeTab
    expect(secondClickActiveTab).not.toEqual(firstClickActiveTab)

    wrapper.findAll('header.tab__header').at(1).trigger('click')
    const thirdClickActiveTab = store.state.activeTab
    expect(thirdClickActiveTab).toEqual(firstClickActiveTab)
  })

  it('renders tab headers titles', () => {
    const wrapper = mount(NegotiationWindowHeader, {
      store,
      localVue,
      stubs: {
        'tab-header': TabHeader
      }
    })

    expect(wrapper.findAll('header.tab__header').at(0).text()).toBeDefined()
    expect(wrapper.findAll('header.tab__header').at(1).text()).toBeDefined()
  })
})
