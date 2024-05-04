<template>
  <div class="search-container">
    <div class="examples">
      <p>ex:</p>
      <p class="example" v-for="example in examples" :key="example">
        {{ example }}
      </p>
    </div>
    <div v-ripple :class="className">
      <div class="icon" @click="searchHandler">
        <img src="@/assets/icons/search.svg" alt="search" />
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        @keyup="searchHandler"
      />
      <div
        class="icon-search"
        v-show="modelValue.trim() !== ''"
        @click="clearSearch"
      >
        <img src="@/assets/icons/close.svg" alt="close" />
      </div>
      <div class="icon-search" v-show="modelValue.trim() === ''"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: Boolean,
      default: false,
    },
    examples: {
      type: Array,
    },
  },
  emits: ['update:modelValue', 'search'],
  data() {
    return {
      className: 'normal p-ripple',
      placeholder: 'Search...',
      setTimeoutId: null,
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
    searchHandler() {
      // emits after 500ms
      clearTimeout(this.setTimeoutId);
      this.setTimeoutId = setTimeout(() => {
        this.$emit('search', this.modelValue);
      }, 500);
    },
    clearSearch() {
      this.$emit('update:modelValue', '');
      this.$emit('search', '');
    },
  },
};
</script>

<style lang="scss" src="./InputSearch.scss" scoped></style>
