<template>
  <div>
    <button @click.prevent="send">Send</button>
  </div>
</template>

<script>
import send from '@/mixins/send.js'

export default {
  name: 'SendButton',
  mixins: [send]
}
</script>
