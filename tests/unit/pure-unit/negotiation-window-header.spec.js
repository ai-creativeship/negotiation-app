import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import NegotiationWindowHeader from '@/components/negotiation-window/NegotiationWindowHeader.vue'

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
      'general/SET_ACTIVE_TAB': jest.fn()
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
        'tab-header': '<header class="tab__header">content</header>'
      }
    })

    expect(wrapper.findAll('header.tab__header').length).toEqual(2)
  })
})
