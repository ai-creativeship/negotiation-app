<template>
  <div>
    <input
      :value="value"
      :name="name"
      :aria-placeholder="placeholder"
      :placeholder="placeholder"
      type="number"
      min="0"
      autofocus
      @input="$emit('input', $event.target.value)"
      @keyup.enter="send"
    >
  </div>
</template>

<script>
import send from '@/mixins/send.js'

export default {
  name: 'InputField',
  mixins: [send],
  props: {
    value: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      default: 'name',
      required: false
    },
    placeholder: {
      type: String,
      default: 'Enter value',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
