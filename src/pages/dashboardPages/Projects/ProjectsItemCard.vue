<template>
  <div class="project-item-card">
    <div class="overlay" v-if="loading"><SpinnerSmall /></div>
    <div class="project-image" @click="projectDetailsHandler">
      <img :src="data.mainImage" alt="project image" />
      <div class="overlay-view">
        <img src="@/assets/icons/eye-bold-white.svg" alt="view" />
      </div>
    </div>
    <div class="project-content">
      <h2>{{ data.name }}</h2>
      <p>{{ new Date(data.createdAt).toDateString() }}</p>
      <div class="btns">
        <div>
          <a :href="data.link" target="_blank">
            <ButtonSmall type="button">
              <img src="@/assets/icons/link.svg" alt="external link" />
              link
            </ButtonSmall>
          </a>
        </div>
        <div class="actions">
          <ButtonAction @btn-clicked="editProject" styleMode="normal">
            <img src="@/assets/icons/edit.svg" alt="edit" />
          </ButtonAction>
          <ButtonAction @btn-clicked="deleteProject" styleMode="danger">
            <img src="@/assets/icons/delete.svg" alt="delete" />
          </ButtonAction>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSmall from '@/components/ui/ButtonSmall.vue';
import ButtonAction from '@/components/ui/ButtonAction.vue';
export default {
  name: 'ProjectsItemCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ButtonSmall,
    ButtonAction,
  },
  emits: ['edit-project', 'delete-project'],
  methods: {
    editProject() {
      this.$emit('edit-project', this.data._id);
    },
    deleteProject() {
      this.$emit('delete-project', this.data._id);
    },
    projectDetailsHandler() {
      this.$router.push({
        path: '/dashboard/projects/details',
        params: { id: this.data._id },
      });
    },
  },
};
</script>

<style lang="scss" src="./ProjectsItemCard.scss" scoped></style>
