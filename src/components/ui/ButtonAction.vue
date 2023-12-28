<template>
  <button v-ripple :class="className" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonAction',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    styleMode: {
      type: String,
      default: 'normal',
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
  mounted() {
    this.className = this.styleMode + ' p-ripple';
  },
};
</script>

<style lang="scss" src="./ButtonAction.scss" scoped></style>
