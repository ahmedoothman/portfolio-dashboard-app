<template>
  <div class="spinner-big">
    <div class="logo">
      <img src="@/assets/logos/icon.svg" alt="logo" />
    </div>
    <div class="spinner">
      <div class="spinner__item"></div>
      <div class="spinner__item"></div>
      <div class="spinner__item"></div>
      <div class="spinner__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerBig',
};
</script>

<style lang="scss" src="./SpinnerBig.scss" scoped></style>
