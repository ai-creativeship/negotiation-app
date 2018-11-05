<template>
  <div class="negotiation-window__wrapper">
    <section class="negotiation-window">
      <negotiation-window-header />
      <negotiation-window-content />
      <div v-if="isModalOpen">
        <result-modal />
      </div>
    </section>
  </div>
</template>

<script>
import NegotiationWindowContent from './NegotiationWindowContent.vue'
import NegotiationWindowHeader from './NegotiationWindowHeader.vue'
import ResultModal from './modal/ResultModal.vue'
import { mapState, mapMutations } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import { MODULE, SET_ACTIVE_TAB } from '@/store/actions/general.js'
import messages from '@/mixins/messages.js'

export default {
  name: 'NegotiationWindow',
  components: {
    NegotiationWindowContent,
    NegotiationWindowHeader,
    ResultModal
  },
  mixins: [messages],
  computed: {
    ...mapState({
      isModalOpen: state => state.general.isModalOpen,
      negotiationSucceeded: state => state.general.negotiationSucceeded
    })
  },
  mounted: function () {
    this.setActiveTab(this.tabsTitles.maximalValueTabTitle)
  },
  methods: {
    ...mapMutations({
      setActiveTab: storeHelpers.concat(MODULE, SET_ACTIVE_TAB)
    })
  }
}
</script>
