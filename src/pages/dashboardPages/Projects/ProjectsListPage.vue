<template>
  <PagesWrapper>
    <template #search-box>
      <InputSearch
        placeholder="Search"
        v-model="searchValue"
        @search="searchHandler"
        :examples="['names', 'tags', 'technologies']"
      />
      <SearchTabs
        :tabs="['overall', 'web', 'desktop', 'mobile']"
        v-model="activeTab"
      />
    </template>
    <template #list>
      <div class="project-list-header">
        <h3 @click="test = !test" class="title">
          Projects <span>{{ projects.length }}</span>
        </h3>
        <div class="btns">
          <ButtonSmall type="button" @btn-clicked="navigateAddNew">
            <img src="@/assets/icons/add-circle.svg" alt="external link" />
            Add New
          </ButtonSmall>
        </div>
      </div>
      <transition-group
        name="list"
        tag="div"
        class="project-list-content"
        v-if="!isLoading && projects.length > 0"
      >
        <ProjectsItemCard
          v-for="item in projects"
          :key="item._id"
          :data="item"
          :loading="deleteLoading"
          @edit-project="editProjectHandler"
          @delete-project="deleteProjectHandler"
        />
      </transition-group>
      <div class="empty">
        <h3 v-if="!isLoading && projects.length === 0">No projects found</h3>
        <h3 v-if="error">{{ error }}</h3>
        <div v-if="isLoading"><SpinnerBig /></div>
      </div>
    </template>
  </PagesWrapper>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useProjectApi from '@/hooks/projectApiHook';
import InputSearch from '@/components/ui/InputSearch.vue';
import SearchTabs from '@/components/ui/SearchTabs.vue';
import ProjectsItemCard from './ProjectsItemCard.vue';

export default {
  name: 'ProjectsListPage',

  components: {
    InputSearch,
    SearchTabs,
    ProjectsItemCard,
  },
  // inject the data from the app component

  setup() {
    const router = useRouter();
    const searchValue = ref('');
    const activeTab = ref('overall');
    const test = ref(false);
    const {
      projects,
      error,
      isLoading,
      deleteLoading,
      getProjectsData,
      deleteProject,
    } = useProjectApi();
    const searchHandler = (value) => {
      searchValue.value = value;
    };

    watch(searchValue, (value) => {
      console.log(value);
    });
    watch(activeTab, (value) => {
      console.log(value);
    });
    // methods
    const navigateAddNew = () => {
      // navigate to add new page
      router.push({ name: 'AddNewProject' });
    };
    const editProjectHandler = (id) => {
      console.log(id);
    };
    const deleteProjectHandler = (id) => {
      deleteProject(id);
    };
    onMounted(() => {
      getProjectsData();
    });

    return {
      searchValue,
      activeTab,
      projects,
      error,
      isLoading,
      deleteLoading,
      navigateAddNew,
      searchHandler,
      editProjectHandler,
      deleteProjectHandler,
      test,
    };
  },
};
</script>

<style src="./ProjectsListPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
