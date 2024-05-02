<template>
  <div class="tech-block">
    <p>{{ name }}</p>
    <img src="@/assets/icons/close-white.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'TechItemBlock',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="./TechItemBlock.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
