<template>
  <router-view v-slot="slotProps">
    <transition name="main-router" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>

  <Toast position="top-right" group="tr" />
  <Toast position="bottom-center" group="bc" />
</template>
<script>
import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: {
    Toast,
  },
  data() {
    return {
      successToast: {
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted',
        life: 4000,
        group: 'tr',
      },
      errorToast: {
        severity: 'error',
        summary: 'Error Message',
        detail: 'Validation failed',
        life: 4000,
        group: 'tr',
      },
    };
  },
  provide() {
    return {
      successToast: this.successToast,
      errorToast: this.errorToast,
    };
  },
  mounted() {
    this.$primevue.config.ripple = true;
  },
};
</script>

<style src="./App.scss" lang="scss"></style>
