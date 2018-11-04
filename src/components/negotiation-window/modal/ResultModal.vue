<template>
  <div class="result-modal">
    <div v-if="negotiationSucceeded">
      Success!
    </div>
    <div v-else>
      Failure
    </div>
    <div>
       Maximum offer was: {{ maximalValue }}
    </div>
    <div>
       Minimum expected salary was: {{ minimalValue }}
    </div>
    <button @click="setModalOpen(false); resetNegotiationWindow()">Close</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import { MODULE, SET_MODAL_OPEN, RESET_NEGOTIATION_WINDOW } from '@/store/actions/general.js'


export default {
  name: 'ResultModal',
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
}
</style>
