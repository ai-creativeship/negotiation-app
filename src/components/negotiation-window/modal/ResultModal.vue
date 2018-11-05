<template>
  <div class="result-modal">
    <h3>
      <div v-if="negotiationSucceeded">
        {{ result.success }}
      </div>
      <div v-else>
        {{ result.failure }}
      </div>
    </h3>
    <div>
      {{ result.maximalValueDescription }}: {{ maximalValue }}
    </div>
    <div>
      {{ result.minimalValueDescription }}: {{ minimalValue }}
    </div>
    <button @click="setModalOpen(false); resetNegotiationWindow(tabsTitles.maximalValueTabTitle)">{{ result.closeButtonText }}</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import { MODULE, SET_MODAL_OPEN, RESET_NEGOTIATION_WINDOW } from '@/store/actions/general.js'
import messages from '@/mixins/messages.js'

export default {
  name: 'ResultModal',
  mixins: [messages],
  computed: {
    ...mapState({
      negotiationSucceeded: state => state.general.negotiationSucceeded,
      maximalValue: state => state.general.maximalValue,
      minimalValue: state => state.general.minimalValue
    })
  },
  methods: {
    ...mapMutations({
      setModalOpen: storeHelpers.concat(MODULE, SET_MODAL_OPEN),
      resetNegotiationWindow: storeHelpers.concat(MODULE, RESET_NEGOTIATION_WINDOW)
    })
  }
}
</script>

<style lang="scss" scoped>
  .result-modal {
    display: relative;
    top: 0;
    right: 0;
    z-index: 2;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
  }
</style>
