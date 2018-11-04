import { SET_ACTIVE_TAB, SET_MODAL_OPEN, RESET_NEGOTIATION_WINDOW,
  SET_MAXIMAL_VALUE_TAB_TITLE, SET_MINIMAL_VALUE_TAB_TITLE,
  SET_MAXIMAL_VALUE, SET_MINIMAL_VALUE } from '../../actions/general'

function areBothValuesSet (state) {
  return state.maximalValue && state.minimalValue
}

function calculateResult (state) {
  state.negotiationSucceeded = state.minimalValue <= state.maximalValue
}

function openModal (state) {
  state.isModalOpen = true
}

function evaluate (state) {
  if (areBothValuesSet(state)) {
    calculateResult(state)
    openModal(state)
  }
}

export default {
  [SET_ACTIVE_TAB]: (state, newActiveTab) => {
    state.activeTab = newActiveTab
  },
  [SET_MODAL_OPEN]: (state, isModalOpen) => {
    state.isModalOpen = isModalOpen
  },
  [RESET_NEGOTIATION_WINDOW]: (state) => {
    state.negotiationSucceeded = undefined
    state.isModalOpen = false
    state.maximalValue = undefined
    state.minimalValue = undefined
  },
  [SET_MAXIMAL_VALUE_TAB_TITLE]: (state, title) => {
    state.maximalValueTabTitle = title
  },
  [SET_MINIMAL_VALUE_TAB_TITLE]: (state, title) => {
    state.minimalValueTabTitle = title
  },
  [SET_MAXIMAL_VALUE]: (state, value) => {
    if (!state.maximalValue) {
      state.maximalValue = value
      evaluate(state)
    }
  },
  [SET_MINIMAL_VALUE]: (state, value) => {
    if (!state.minimalValue) {
      state.minimalValue = value
      evaluate(state)
    }
  }
}
