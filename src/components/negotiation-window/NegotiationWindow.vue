<template>
  <div class="negotiation-window__wrapper">
    <section class="negotiation-window">
      <negotiation-window-header
        :active-tab="activeTab"
        @switchActiveTab="onSwitchActiveTab"
      />
      <negotiation-window-content />
    </section>
  </div>
</template>

<script>
import NegotiationWindowContent from './NegotiationWindowContent.vue'
import NegotiationWindowHeader from './NegotiationWindowHeader.vue'

export default {
  name: 'NegotiationWindow',
  components: {
    NegotiationWindowContent,
    NegotiationWindowHeader
  },
  data: function () {
    return {
      isModalClosed: false,
      employersMaximalWage: -1,
      employeesMinimalWage: -1,
      communicates: {
        success: 'Success!',
        failure: 'Failure'
      },
      activeTab: ''
    }
  },
  methods: {
    onSwitchActiveTab (newActive) {
      this.activeTab = newActive
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
