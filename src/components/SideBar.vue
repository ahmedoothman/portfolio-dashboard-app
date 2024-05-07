<template>
  <div class="side-bar-container">
    <!-- SideBar -->
    <router-link to="/dashboard/settings/profile" class="nav-item"
      ><i class="pi pi-user"></i> Profile</router-link
    >
    <router-link to="/dashboard/settings/social-media" class="nav-item"
      ><i class="pi pi-share-alt"></i> Social Media</router-link
    >
    <router-link to="/dashboard/settings/change-password" class="nav-item"
      ><i class="pi pi-lock"></i>Change Password</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style src="./SideBar.scss" lang="scss" scoped></style>
