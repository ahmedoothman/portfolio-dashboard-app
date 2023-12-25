<template>
  <button v-ripple class="normal p-ripple" @click="clickHandler">
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
      className: 'normal p-ripple',
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
