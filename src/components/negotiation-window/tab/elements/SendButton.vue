<template>
  <div>
    <button @click.prevent="send">Send</button>
  </div>
</template>

<script>
export default {
  name: 'SendButton',
  methods: {
    send () {
      this.$emit('send')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
