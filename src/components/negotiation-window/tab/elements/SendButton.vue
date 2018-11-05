<template>
  <div>
    <button @click.prevent="send">{{ sendButtonText }} </button>
  </div>
</template>

<script>
import send from '@/mixins/send.js'
import messages from '@/mixins/messages.js'

export default {
  name: 'SendButton',
  mixins: [send, messages]
}
</script>
