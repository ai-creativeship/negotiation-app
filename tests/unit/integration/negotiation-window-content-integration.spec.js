import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sourceMutations from '@/store/modules/general/mutations.js'
import NegotiationWindowContent from '@/components/negotiation-window/NegotiationWindowContent.vue'
import TabContent from '@/components/negotiation-window/tab/TabContent.vue'
import messages from '@/constants/messages.js'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NegotiationWindowContent.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    state = {
      general: {
        activeTab: messages.tabsTitles.maximalValueTabTitle
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
    const wrapper = shallowMount(NegotiationWindowContent, {
      store,
      localVue,
      stubs: {
        'tab-content': TabContent
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders only one content at the time', () => {
    const wrapper = shallowMount(NegotiationWindowContent, {
      store,
      localVue,
      stubs: {
        'tab-content': TabContent
      }
    })

    expect(wrapper.findAll('.tab__content').length).toEqual(1)
  })
})
