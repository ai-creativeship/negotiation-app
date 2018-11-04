<template>
  <section class="tab__content">
    <div v-if="isVisible()">
      <input-field
        v-model="unconfirmedValue"
        :placeholder="placeholder()"
        :name="title"
        @send="onSend"
      />
      <p v-if="error">
        {{ error }}
      </p>
      <send-button
        @send="onSend"
      />
    </div>
  </section>
</template>

<script>
import InputField from './elements/InputField.vue'
import SendButton from './elements/SendButton.vue'
import { mapMutations, mapState } from 'vuex'
import { MODULE, SET_MAXIMAL_VALUE, SET_MINIMAL_VALUE } from '@/store/actions/general.js'
import { storeHelpers } from '@/helpers/store.js'

export default {
  name: 'TabContent',
  components: {
    InputField,
    SendButton
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false
    }
  },
  data: function () {
    return {
      unconfirmedValue: '',
      error: ''
    }
  },
  computed: {
    ...mapState({
      maximalValueTabTitle: state => state.general.maximalValueTabTitle,
      minimalValueTabTitle: state => state.general.minimalValueTabTitle,
      maximalValue: state => state.general.maximalValue,
      minimalValue: state => state.general.minimalValue,
      maximalValueInputPlaceholder: state => state.general.maximalValueInputPlaceholder,
      minimalValueInputPlaceholder: state => state.general.minimalValueInputPlaceholder
    })
  },
  mounted () {
    this.unconfirmedValue = ''
  },
  methods: {
    ...mapMutations({
      setMaximalValue: storeHelpers.concat(MODULE, SET_MAXIMAL_VALUE),
      setMinimalValue: storeHelpers.concat(MODULE, SET_MINIMAL_VALUE)
    }),
    isValid () {
      return this.unconfirmedValue && !isNaN(this.unconfirmedValue) && this.unconfirmedValue > 0
    },
    onSend (sentValue) {
      if (!this.isValid()) {
        this.error = 'Invalid value'
        this.unconfirmedValue = ''
        return
      } else {
        this.error = ''
      }

      if (this.title === this.maximalValueTabTitle) {
        this.setMaximalValue(this.unconfirmedValue)
      } else if (this.title === this.minimalValueTabTitle) {
        this.setMinimalValue(this.unconfirmedValue)
      } else {
        throw new Error('Incorrect tab title - can\'t set correct value')
      }

      this.unconfirmedValue = ''
    },
    isVisible () {
      if (this.title === this.maximalValueTabTitle) {
        return !this.maximalValue
      } else if (this.title === this.minimalValueTabTitle) {
        return !this.minimalValue
      } else {
        throw new Error('Incorrect tab title - can\'t set correct value')
      }
    },
    placeholder () {
      if (this.title === this.maximalValueTabTitle) {
        return this.maximalValueInputPlaceholder
      } else if (this.title === this.minimalValueTabTitle) {
        return this.minimalValueInputPlaceholder
      } else {
        throw new Error('Incorrect tab title - can\'t set placeholder')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
