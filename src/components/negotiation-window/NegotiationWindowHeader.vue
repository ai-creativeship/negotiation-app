<template>
  <div class="headers__container">
    <div @click="setActiveTab(maximalValueTabTitle)">
      <tab-header
        :title="maximalValueTabTitle"
        :is-active="isActiveTab(maximalValueTabTitle)"
      />
    </div>
    <div @click="setActiveTab(minimalValueTabTitle)">
      <tab-header
        :title="minimalValueTabTitle"
        :is-active="isActiveTab(minimalValueTabTitle)"
      />
    </div>
  </div>
</template>

<script>
import TabHeader from './tab/TabHeader.vue'
import { mapMutations, mapState } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import isActiveTab from '@/mixins/is-active-tab.js'
import { MODULE, SET_ACTIVE_TAB } from '@/store/actions/general.js'

export default {
  name: 'NegotiationWindowHeader',
  components: {
    TabHeader
  },
  mixins: [isActiveTab],
  computed: {
    ...mapState({
      activeTab: state => state.general.activeTab,
      maximalValueTabTitle: state => state.general.maximalValueTabTitle,
      minimalValueTabTitle: state => state.general.minimalValueTabTitle
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
