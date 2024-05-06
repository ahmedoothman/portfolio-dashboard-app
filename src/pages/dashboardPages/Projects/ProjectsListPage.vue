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
        <NoContentFound v-if="!isLoading && projects.length === 0">
        </NoContentFound>
        <h3 v-if="error">{{ error }}</h3>
        <div v-if="isLoading"><SpinnerBig /></div>
      </div>
    </template>
  </PagesWrapper>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useProjectAPI from '@/hooks/projectAPIHook';
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
    } = useProjectAPI();
    const searchHandler = async (value) => {
      // if there is a value filter projects
      if (value && value.length > 0) {
        projects.value = projects.value.filter((project) => {
          return project.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        await getProjectsData();
      }
    };

    watch(activeTab, async (value) => {
      await getProjectsData();
      if (value === 'overall') return;
      // filter the projects based on the active tab
      projects.value = projects.value.filter((project) => {
        return project.type === value;
      });
    });
    // methods
    const navigateAddNew = () => {
      // navigate to add new page
      router.push({ name: 'AddNewProject' });
    };
    const editProjectHandler = (id) => {
      //pass the id to the edit page
      router.push({ name: 'editProject', params: { id } });
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
@/hooks/projectAPIHook
