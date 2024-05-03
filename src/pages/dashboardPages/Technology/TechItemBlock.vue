<template>
  <div class="tech-block">
    <p v-if="data._id === deletePending.id && deletePending.loading">...</p>
    <p v-else>{{ data.name }}</p>
    <img
      src="@/assets/icons/close-white.svg"
      alt=""
      @click="deleteTechHandler"
    />
  </div>
</template>
<script>
export default {
  name: 'TechItemBlock',
  props: {
    data: {
      type: Object,
      required: true,
    },
    deletePending: {
      type: Object,
    },
  },
  methods: {
    deleteTechHandler() {
      this.$emit('delete-tech', this.data._id);
    },
  },
};
</script>

<style src="./TechItemBlock.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
