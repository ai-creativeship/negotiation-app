<template>
  <div class="negotiation-window__wrapper">
    <section class="negotiation-window">
      <div class="headers__container">
        <tab-header />
        <tab-header />
      </div>
      <div class="content__container">
        <tab-content />
        <tab-content />
      </div>
    </section>
  </div>
</template>

<script>
import TabHeader from './tab/TabHeader.vue'
import TabContent from './tab/TabContent.vue'

export default {
  name: 'NegotiationWindow',
  components: {
    TabHeader,
    TabContent
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
    }
  },
  data: function () {
    return {
      isModalClosed: false,
      employersMaximalWage: -1,
      employeesMinimalWage: -1,
      communicates: {
        success: 'Success!',
        failure: 'Failure'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
