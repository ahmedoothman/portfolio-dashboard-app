<template>
  <div :class="className">
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
      className: 'normal',
    };
  },
  watch: {
    error(value) {
      if (value) {
        this.className = 'error';
      } else {
        this.className = 'normal';
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
