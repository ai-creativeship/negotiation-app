import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import NegotiationWindow from '@/components/negotiation-window/NegotiationWindow.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NegotiationWindow.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    state = {
      general: {
        isModalOpen: false,
        negotiationSucceeded: undefined,
        activeTab: undefined
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

  it('renders a vue instance when using mock', () => {
    const wrapper = shallowMount(NegotiationWindow, {
      store,
      localVue,
      stubs: [
        'negotiation-window-header',
        'negotiation-window-content'
      ]
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders a header and content components', () => {
    const wrapper = shallowMount(NegotiationWindow, {
      store,
      localVue,
      stubs: [
        'negotiation-window-header',
        'negotiation-window-content'
      ]
    })

    expect(wrapper.find('negotiation-window-header')).toBeDefined()
    expect(wrapper.find('negotiation-window-content')).toBeDefined()
  })
})
