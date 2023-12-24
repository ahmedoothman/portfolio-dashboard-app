import { ref } from 'vue';

export default function useAlert(startingValue = false) {
  const alertIsVisible = ref(startingValue);

  function showAlert() {
    alertIsVisible.value = true;
  }

  function hideAlert() {
    alertIsVisible.value = false;
  }

  return {
    alertIsVisible,
    showAlert,
    hideAlert,
  };
}
