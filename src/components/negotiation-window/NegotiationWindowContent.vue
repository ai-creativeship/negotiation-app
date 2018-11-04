<template>
  <div class="content__container">
    <tab-content
      v-if="activeTab === maximalValueTabTitle"
      :title="maximalValueTabTitle"
    />
    <tab-content
      v-if="activeTab === minimalValueTabTitle"
      :title="minimalValueTabTitle"
    />
  </div>
</template>

<script>
import TabContent from './tab/TabContent.vue'
import { mapState } from 'vuex'

export default {
  name: 'NegotiationWindowContent',
  components: {
    TabContent
  },
  computed: {
    ...mapState({
      activeTab: state => state.general.activeTab,
      maximalValueTabTitle: state => state.general.maximalValueTabTitle,
      minimalValueTabTitle: state => state.general.minimalValueTabTitle
    })
  }
}
</script>

<style>

</style>
