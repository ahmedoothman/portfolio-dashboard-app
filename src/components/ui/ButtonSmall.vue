<template>
  <button class="normal" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonSmall',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
  emits: ['btn-clicked'],
  data() {
    return {
      className: 'normal',
    };
  },

  methods: {
    clickHandler() {
      this.$emit('btn-clicked');
    },
  },
};
</script>

<style lang="scss" src="./ButtonSmall.scss" scoped></style>
