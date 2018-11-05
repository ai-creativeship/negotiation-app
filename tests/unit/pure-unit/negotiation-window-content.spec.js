import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import NegotiationWindowContent from '@/components/negotiation-window/NegotiationWindowContent.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NegotiationWindowContent.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    state = {
      general: {
        activeTab: ''
      }
    }
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('renders a vue instance', () => {
    const wrapper = shallowMount(NegotiationWindowContent, {
      store,
      localVue,
      stubs: [
        'tab-content'
      ]
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
