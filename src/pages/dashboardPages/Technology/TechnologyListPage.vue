<template>
  <div>
    <h1>TechnologyPage</h1>
    <div class="search-box">
      <InputSmall placeholder="Search" />
    </div>
    <div class="technology-list">
      <div class="technology-list__header">
        <h3>Technology</h3>
      </div>
    </div>
  </div>
</template>

<script>
import InputSmall from '@/components/ui/InputSmall.vue';
export default {
  name: 'TechnologyListPage',
  components: {
    InputSmall,
  },
};
</script>

<style src="./TechnologyListPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
