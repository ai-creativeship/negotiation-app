<template>
  <section class="tab__content">
    <input-field />
    <send-button />
  </section>
</template>

<script>
import InputField from './elements/InputField.vue'
import SendButton from './elements/SendButton.vue'

export default {
  name: 'TabContent',
  components: {
    InputField,
    SendButton
  },
  props: {
    value: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
