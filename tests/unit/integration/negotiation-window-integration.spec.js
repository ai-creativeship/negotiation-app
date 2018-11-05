import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import NegotiationWindow from '@/components/negotiation-window/NegotiationWindow.vue'
import sourceMutations from '@/store/modules/general/mutations.js'

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
      'general/SET_ACTIVE_TAB': sourceMutations.SET_ACTIVE_TAB
    }
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('renders a vue instance when using vuex', () => {
    const wrapper = shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('has active tab initially', () => {
    mount(NegotiationWindow, {
      store,
      localVue
    })

    expect(store.state.activeTab).toBeDefined()
  })
})
