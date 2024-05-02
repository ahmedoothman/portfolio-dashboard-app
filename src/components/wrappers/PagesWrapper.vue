<template>
  <div class="pages-wrapper">
    <div class="search-box">
      <slot name="search-box"></slot>
    </div>
    <div class="list">
      <slot name="list"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" src="./PagesWrapper.scss" scoped></style>
