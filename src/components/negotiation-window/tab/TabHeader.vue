<template>
  <header
    :class="{ active: isActive }"
    class="tab__header"
  >
    {{ title }}
  </header>
</template>

<script>
export default {
  name: 'TabHeader',
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: false
    },
    title: {
      type: String,
      default: 'Tab Header',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    border-bottom: 1px solid #daa;
  }
</style>
