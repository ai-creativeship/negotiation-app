<template>
  <div>
    <input
      :value="value"
      type="text"
      @input="updateUnconfirmedValue"
      @keyup.enter.prevent="send"
    >
    value: {{ value }}
    unconfirmedValue: {{ unconfirmedValue }}
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
    }
  },
  data: function () {
    return {
      unconfirmedValue: ''
    }
  },
  methods: {
    updateUnconfirmedValue (event) {
      this.unconfirmedValue = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
