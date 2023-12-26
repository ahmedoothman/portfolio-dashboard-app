<template>
  <div v-ripple :class="className">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSmall',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      className: 'normal p-ripple',
    };
  },
  watch: {
    error(value) {
      if (value) {
        this.className = 'error p-ripple';
      } else {
        this.className = 'normal p-ripple';
      }
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss" src="./InputSmall.scss" scoped></style>
