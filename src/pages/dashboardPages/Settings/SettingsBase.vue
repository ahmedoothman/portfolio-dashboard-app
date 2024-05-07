<template>
  <div class="settings-container">
    <SideBar />
    <div class="main-content">
      <router-view v-slot="slotProps">
        <transition name="settings-router" mode="out-in">
          <component :is="slotProps.Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
export default {
  name: 'SettingsBase',
  components: {
    SideBar,
  },
};
</script>

<style src="./SettingsBase.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
