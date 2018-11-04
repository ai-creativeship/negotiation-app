<template>
  <div class="content__container">
    <tab-content />
    <tab-content />
  </div>
</template>

<script>
import NegotiationWindowComponent from '@/mixins/negotiation-window-component.js'
import TabContent from './tab/TabContent.vue'

export default {
  name: 'NegotiationWindowContent',
  components: {
    TabContent
  },
  mixins: [NegotiationWindowComponent]
}
</script>

<style>

</style>
