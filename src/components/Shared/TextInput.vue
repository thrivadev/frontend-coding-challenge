<script>
  export default {
    name: 'TextInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      feedback: {
        type: String,
        default: null
      },
      error: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentFeedback: this.feedback,
        currentSuggestion: null,
        updatedValue: null,
        affixPadding: {
          left: '',
          right: ''
        }
      }
    },
    mounted () {
      this.affixPadding.left = this.$refs.prefix ? `${this.$refs.prefix.clientWidth + 15}px` : '15px'
      this.affixPadding.right = this.$refs.suffix ? `${this.$refs.suffix.clientWidth + 15}px` : '15px'
    },
    computed: {
      currentValue () {
        return this.updatedValue || this.value
      }
    },
    methods: {
      fillSuggestion () {
        this.updatedValue = this.currentSuggestion
        this.currentSuggestion = null
        this.$emit('input', this.updatedValue)
      },
      onBlur (e) {
        this.onEvent(e)
      },
      onInput (e) {
        this.updatedValue = e.target.value
        this.$emit('input', this.updatedValue)
      },
      onEvent (e) { this.$emit(e.type, e) }
    },
    watch: {
      feedback () {
        this.currentFeedback = this.feedback
      }
    }
  }
</script>

<template>  
  <div class="input input--text" :class="{ 'error': error }">
    <label>{{ label }}</label>
    <p class="body--small" v-if="description">{{ description }}</p>
    <div class="input__container" :class="{'input__group' : this.$slots.action }">
      <input class="error" ref="input" :value="value" :id="id" :type="type" :name="name" :placeholder="placeholder" :disabled="disabled" :style="{ 'padding-left': affixPadding.left, 'padding-right': affixPadding.right }" :class="{ 'input--with-affix': $slots.prefix || $slots.suffix }" @blur="onBlur" @input="onInput" @keyup="onEvent" @focus="onEvent" @change="onEvent"/>
      <div class="input__prefix" v-if="$slots.prefix" ref="prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="input__suffix" v-if="$slots.suffix" ref="suffix">
        <slot name="suffix"></slot>
      </div>
      <div class="input__action" v-if="$slots.action">
        <slot name="action"></slot>
      </div>
    </div>
    <p class="body--small input__feedback" v-if="currentFeedback || currentSuggestion">
      <span v-if="type === 'email' && currentSuggestion && !feedback">
        Did you mean&nbsp;<a @click="fillSuggestion">{{ currentSuggestion }}</a>?
      </span>
      <span v-else-if="feedback">{{ currentFeedback }}</span>
    </p>
  </div>
</template>

<style lang="css">
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>
