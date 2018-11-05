import { shallowMount, createLocalVue } from '@vue/test-utils'
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
        activeTab: undefined,
        maximalValue: undefined,
        minimalValue: undefined
      }
    }
    mutations = {
      'general/SET_ACTIVE_TAB': sourceMutations.SET_ACTIVE_TAB,
      'general/SET_MAXIMAL_VALUE': sourceMutations.SET_MAXIMAL_VALUE,
      'general/SET_MINIMAL_VALUE': sourceMutations.SET_MINIMAL_VALUE
    }
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('negotiationSucceeded is true when maximalValue is greater than minimalValue', () => {
    shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    mutations['general/SET_MAXIMAL_VALUE'](store.state, 5)
    mutations['general/SET_MINIMAL_VALUE'](store.state, 2)

    expect(store.state.negotiationSucceeded).toBeDefined()
    expect(store.state.negotiationSucceeded).toBeTruthy()
  })

  it('negotiationSucceeded is true when maximalValue is equal to minimalValue', () => {
    shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    mutations['general/SET_MAXIMAL_VALUE'](store.state, 5)
    mutations['general/SET_MINIMAL_VALUE'](store.state, 5)

    expect(store.state.negotiationSucceeded).toBeDefined()
    expect(store.state.negotiationSucceeded).toBeTruthy()
  })

  it('negotiationSucceeded is false when maximalValue is greater than minimalValue', () => {
    shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    mutations['general/SET_MAXIMAL_VALUE'](store.state, 2)
    mutations['general/SET_MINIMAL_VALUE'](store.state, 5)

    expect(store.state.negotiationSucceeded).toBeDefined()
    expect(store.state.negotiationSucceeded).toBeFalsy()
  })

  it('negotiationSucceeded is undefined when maximalValue is not defined', () => {
    shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    mutations['general/SET_MINIMAL_VALUE'](store.state, 2)

    expect(store.state.negotiationSucceeded).toBeUndefined()
  })

  it('negotiationSucceeded is undefined when minimalValue is not defined', () => {
    shallowMount(NegotiationWindow, {
      store,
      localVue
    })

    mutations['general/SET_MAXIMAL_VALUE'](store.state, 5)

    expect(store.state.negotiationSucceeded).toBeUndefined()
  })
})
