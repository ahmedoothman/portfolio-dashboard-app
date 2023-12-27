<template>
  <div class="tabs-container">
    <div
      :class="tab === localActiveTab ? 'active' : 'normal'"
      v-for="tab in tabs"
      :key="tab"
    >
      <input
        type="radio"
        name="tabslist"
        :id="tab"
        :value="tab"
        v-model="localActiveTab"
      />
      <label v-ripple class="p-ripple" :for="tab">
        {{ tab }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      localActiveTab: this.modelValue,
    };
  },
  watch: {
    localActiveTab(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss" src="./SearchTabs.scss" scoped></style>
