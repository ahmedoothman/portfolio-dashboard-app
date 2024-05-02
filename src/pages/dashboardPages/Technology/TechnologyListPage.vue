<template>
  <PagesWrapper>
    <template #search-box>
      <div class="search-box">
        <InputSmall placeholder="Search" />
      </div>
    </template>
    <template #content>
      <div class="main-content">
        <div class="input-title">
          <h3>Technologies</h3>
          <p>when multiple separate wit ( , )</p>
        </div>
        <div class="input-fields">
          <input type="text" />
          <ButtonSmall type="button" @btn-clicked="navigateAddNew">
            <img src="@/assets/icons/add-circle.svg" alt="external link" />
            Add
          </ButtonSmall>
        </div>
        <div class="tech-list">
          <TechItemBlock v-for="index in 20" :key="index" name="Node JS" />
        </div>
      </div>
    </template>
  </PagesWrapper>
</template>

<script>
import InputSmall from '@/components/ui/InputSmall.vue';
import TechItemBlock from './TechItemBlock.vue';
export default {
  name: 'TechnologyListPage',
  components: {
    InputSmall,
    TechItemBlock,
  },
};
</script>

<style src="./TechnologyListPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
