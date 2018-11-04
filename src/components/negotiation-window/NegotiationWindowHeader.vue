<template>
  <div class="headers__container">
    <div @click="switchActiveTab(tabsTitles.employerTab)">
      <tab-header
        :title="tabsTitles.employerTab"
        :is-active="isActiveTab(tabsTitles.employerTab)"
      />
    </div>
    <div @click="switchActiveTab(tabsTitles.employeeTab)">
      <tab-header
        :title="tabsTitles.employeeTab"
        :is-active="isActiveTab(tabsTitles.employeeTab)"
      />
    </div>
  </div>
</template>

<script>
import NegotiationWindowComponent from '@/mixins/negotiation-window-component.js'
import TabHeader from './tab/TabHeader.vue'

export default {
  name: 'NegotiationWindowHeader',
  components: {
    TabHeader
  },
  mixins: [NegotiationWindowComponent]
}
</script>

<style>

</style>
