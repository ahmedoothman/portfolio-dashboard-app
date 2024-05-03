<template>
  <div v-ripple :class="className">
    <input
      :type="customType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
    <div
      class="icon-eye"
      v-if="type === 'password' && !eyeToggle"
      @click="showPassword"
    >
      <img src="@/assets/icons/eye-outline.svg" alt="eye" />
    </div>
    <div
      class="icon-eye"
      v-if="type === 'password' && eyeToggle"
      @click="hidePasword"
    >
      <img src="@/assets/icons/eye-bold.svg" alt="eye" />
    </div>
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
  emits: ['update:modelValue', 'search'],
  data() {
    return {
      className: 'normal p-ripple',
      eyeToggle: false,
      searchTimeout: null,
      customType: 'password',
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
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.search();
      }, 500);

      this.$emit('update:modelValue', value);
    },
    search() {
      this.$emit('search', this.modelValue);
    },
    showPassword() {
      this.eyeToggle = true;
      this.customType = 'text';
    },
    hidePasword() {
      this.eyeToggle = false;
      this.customType = 'password';
    },
  },
  beforeMount() {
    this.customType = this.type;
  },
};
</script>

<style lang="scss" src="./InputSmall.scss" scoped></style>
