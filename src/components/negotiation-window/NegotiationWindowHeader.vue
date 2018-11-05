<template>
  <div class="headers__container">
    <div @click="setActiveTab(tabsTitles.maximalValueTabTitle)">
      <tab-header
        :title="tabsTitles.maximalValueTabTitle"
        :is-active="isActiveTab(tabsTitles.maximalValueTabTitle)"
      />
    </div>
    <div @click="setActiveTab(tabsTitles.minimalValueTabTitle)">
      <tab-header
        :title="tabsTitles.minimalValueTabTitle"
        :is-active="isActiveTab(tabsTitles.minimalValueTabTitle)"
      />
    </div>
  </div>
</template>

<script>
import TabHeader from './tab/TabHeader.vue'
import { mapMutations, mapState } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import isActiveTab from '@/mixins/is-active-tab.js'
import messages from '@/mixins/messages.js'
import { MODULE, SET_ACTIVE_TAB } from '@/store/actions/general.js'

export default {
  name: 'NegotiationWindowHeader',
  components: {
    TabHeader
  },
  mixins: [isActiveTab, messages],
  computed: {
    ...mapState({
      activeTab: state => state.general.activeTab
    })
  },
  methods: {
    ...mapMutations({
      setActiveTab: storeHelpers.concat(MODULE, SET_ACTIVE_TAB)
    })
  }
}
</script>

<style lang="scss" scoped>
  .headers {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: center;

      *:not(:last-child) {
        padding-right: 5px;
      }
    }
  }
</style>
