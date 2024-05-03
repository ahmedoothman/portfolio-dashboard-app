<template>
  <PagesWrapper>
    <template #search-box>
      <div class="search-box">
        <InputSmall
          placeholder="Search"
          @search="searchHandler"
          v-model.trim="searchValue"
        />
      </div>
    </template>
    <template #content>
      <div class="main-content">
        <div class="input-title">
          <h3>Technologies</h3>
          <p></p>
        </div>
        <form @submit.prevent="() => {}">
          <div class="input-fields">
            <input type="text" v-model="techName" />
            <ButtonSmall type="button" @btn-clicked="addTechHandler">
              <img src="@/assets/icons/add-circle.svg" alt="external link" />
              Add
            </ButtonSmall>
          </div>
        </form>
        <div class="tech-list">
          <TechItemBlock
            v-for="tech in technologies"
            :key="tech._id"
            :data="tech"
            @delete-tech="deleteTechHandler"
            :deletePending="deleteLoading"
          />
          <NoContentFound v-if="!isLoading && technologies.length === 0" />
          <SpinnerBig v-if="isLoading" />
        </div>
      </div>
    </template>
  </PagesWrapper>
</template>

<script>
import InputSmall from '@/components/ui/InputSmall.vue';
import TechItemBlock from './TechItemBlock.vue';
import useTechAPI from '@/hooks/techAPIHook';

import { ref, onMounted } from 'vue';
export default {
  name: 'TechnologyListPage',
  components: {
    InputSmall,
    TechItemBlock,
  },
  setup() {
    // data
    const techName = ref('');
    const searchValue = ref('');
    // hooks
    const {
      isLoading,
      error,
      technologies,
      deleteLoading,
      getTechnologiesData,
      addTechnology,
      deleteTechnology,
    } = useTechAPI();

    // methods
    const addTechHandler = () => {
      const data = {
        name: techName.value,
      };
      addTechnology(data);
    };

    const deleteTechHandler = async (id) => {
      await deleteTechnology(id);
    };

    const searchHandler = (value) => {
      // if there is a value filter technologies
      if (value && value.length > 0) {
        technologies.value = technologies.value.filter((tech) => {
          return tech.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        getTechnologiesData();
      }
    };

    // lifecycle
    onMounted(async () => {
      await getTechnologiesData();
    });
    return {
      techName,
      searchValue,
      isLoading,
      deleteLoading,
      error,
      technologies,
      searchHandler,
      addTechHandler,
      deleteTechHandler,
    };
  },
};
</script>

<style src="./TechnologyListPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
