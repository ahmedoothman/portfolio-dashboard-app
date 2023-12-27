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
      <div class="project-list__header">
        <h3>Project</h3>
      </div>
      <div class="item"></div>
    </template>
  </PagesWrapper>
</template>

<script>
import InputSearch from '@/components/ui/InputSearch.vue';
import SearchTabs from '@/components/ui/SearchTabs.vue';
export default {
  name: 'ProjectsListPage',

  components: {
    InputSearch,
    SearchTabs,
  },
  data() {
    return {
      searchValue: '',
      activeTab: 'overall',
    };
  },
  watch: {
    searchValue(value) {
      console.log(value);
    },
  },
  methods: {
    searchHandler() {
      console.log('search');
    },
  },
};
</script>

<style src="./ProjectsListPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
