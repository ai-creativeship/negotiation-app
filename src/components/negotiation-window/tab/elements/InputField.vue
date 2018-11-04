<template>
  <div>
    <input
      :value="value"
      type="number"
      min="0"
      :name="name"
      aria-placeholder="Type message... TODO"
      placeholder="Type message... TODO"
      autofocus
      @input="$emit('input', $event.target.value)"
      @keyup.enter="send"
    >
  </div>
</template>

<script>
export default {
  name: 'InputField',
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
    }
  },
  methods: {
    send () {
      this.$emit('send')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
