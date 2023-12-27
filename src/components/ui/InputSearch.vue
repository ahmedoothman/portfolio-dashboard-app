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
        @keyup.enter="searchHandler"
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
      this.$emit('search');
    },
    clearSearch() {
      this.$emit('update:modelValue', '');
    },
  },
};
</script>

<style lang="scss" src="./InputSearch.scss" scoped></style>
