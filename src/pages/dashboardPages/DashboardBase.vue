<template>
  <div>
    <NavBar />
    <router-view v-slot="slotProps">
      <transition name="dashboard-router" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'DashboardBase',
  components: {
    NavBar,
  },
};
</script>

<style src="./DashboardBase.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
