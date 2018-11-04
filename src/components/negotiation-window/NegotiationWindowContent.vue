<template>
  <div class="content__container">
    <tab-content />
    <tab-content />
  </div>
</template>

<script>
import TabContent from './tab/TabContent.vue'

export default {
  name: 'NegotiationWindowContent',
  components: {
    TabContent
  }
}
</script>

<style>

</style>
