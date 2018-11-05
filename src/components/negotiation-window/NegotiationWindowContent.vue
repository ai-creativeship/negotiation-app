<template>
  <div class="content__container">
    <tab-content
      v-if="isActiveTab(tabsTitles.maximalValueTabTitle)"
      :title="tabsTitles.maximalValueTabTitle"
    />
    <tab-content
      v-if="isActiveTab(tabsTitles.minimalValueTabTitle)"
      :title="tabsTitles.minimalValueTabTitle"
    />
  </div>
</template>

<script>
import TabContent from './tab/TabContent.vue'
import isActiveTab from '@/mixins/is-active-tab.js'
import messages from '@/mixins/messages.js'
import { mapState } from 'vuex'

export default {
  name: 'NegotiationWindowContent',
  components: {
    TabContent
  },
  mixins: [isActiveTab, messages],
  computed: {
    ...mapState({
      activeTab: state => state.general.activeTab
    })
  }
}
</script>
