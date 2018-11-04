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
import TabHeader from './tab/TabHeader.vue'

export default {
  name: 'NegotiationWindowHeader',
  components: {
    TabHeader
  },
  props: {
    tabsTitles: {
      type: Object,
      default: function () {
        return {
          employerTab: 'Employer-Tab',
          employeeTab: 'Employee-Tab'
        }
      },
      required: false
    },
    activeTab: {
      type: String,
      default: '',
      required: false
    }
  },
  mounted: function () {
    this.switchActiveTab(this.tabsTitles.employerTab)
  },
  methods: {
    switchActiveTab (newActive) {
      this.$emit('switchActiveTab', newActive)
    },
    isActiveTab (tabToCheck) {
      return this.activeTab === tabToCheck
    }
  }

}
</script>

<style>

</style>
