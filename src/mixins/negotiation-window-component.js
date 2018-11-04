export default {
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
