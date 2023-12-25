<template>
  <ProgressSpinner
    style="width: 22px; height: 22px; margin: 0px"
    strokeWidth="6"
    fill="transparent"
    animationDuration=".5s"
    aria-label="Custom ProgressSpinner"
  />
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';

export default {
  name: 'SpinnerSmall',
  components: {
    ProgressSpinner,
  },
};
</script>
