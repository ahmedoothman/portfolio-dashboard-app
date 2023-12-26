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
      <TechnologyCard />
      <TechnologyCard />
    </div>
  </div>
</template>

<script>
import InputSmall from '@/components/ui/InputSmall.vue';
export default {
  name: 'TechnologyPage',
  components: {
    InputSmall,
  },
};
</script>

<style src="./TechnologyPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
