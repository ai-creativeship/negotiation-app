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
import { MODULE, SET_ACTIVE_TAB, SET_MAXIMAL_VALUE_TAB_TITLE, SET_MINIMAL_VALUE_TAB_TITLE } from '@/store/actions/general.js'

export default {
  name: 'NegotiationWindow',
  components: {
    NegotiationWindowContent,
    NegotiationWindowHeader,
    ResultModal
  },
  props: {
    tabsTitles: {
      type: Object,
      default: function () {
        return {
          maximalValueTabTitle: 'Employer-Tab',
          minimalValueTabTitle: 'Employee-Tab'
        }
      },
      required: false
    }
  },
  computed: {
    ...mapState({
      isModalOpen: state => state.general.isModalOpen,
      negotiationSucceeded: state => state.general.negotiationSucceeded
    })
  },
  mounted: function () {
    this.setMaximalValueTabTitle(this.tabsTitles.maximalValueTabTitle)
    this.setMinimalValueTabTitle(this.tabsTitles.minimalValueTabTitle)
    this.setActiveTab(this.tabsTitles.maximalValueTabTitle)
  },
  methods: {
    ...mapMutations({
      setActiveTab: storeHelpers.concat(MODULE, SET_ACTIVE_TAB),
      setMaximalValueTabTitle: storeHelpers.concat(MODULE, SET_MAXIMAL_VALUE_TAB_TITLE),
      setMinimalValueTabTitle: storeHelpers.concat(MODULE, SET_MINIMAL_VALUE_TAB_TITLE)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
