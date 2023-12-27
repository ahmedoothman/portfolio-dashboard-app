<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/logos/logo-wide-white.svg" alt="logo" />
    </div>
    <div class="part">
      <nav class="nav">
        <ul>
          <li>
            <router-link v-ripple class="p-ripple" to="/dashboard/home"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link v-ripple class="p-ripple" to="/dashboard/technology"
              >Technology</router-link
            >
          </li>
          <li>
            <router-link v-ripple class="p-ripple" to="/dashboard/settings"
              >Settings</router-link
            >
          </li>
        </ul>
      </nav>
      <li v-ripple class="p-ripple sign-out-tab">
        <div class="icon">
          <img src="@/assets/icons/sign-out.svg" alt="user" />
        </div>
        <a @click="signOutHandler">Sign Out</a>
      </li>
    </div>
  </header>
</template>

<script>
import { signOut } from '@/utils/auth';
export default {
  name: 'NavBar',
  methods: {
    signOutHandler() {
      signOut(this.$router);
    },
  },
};
</script>

<style src="./NavBar.scss" lang="scss" scoped></style>
