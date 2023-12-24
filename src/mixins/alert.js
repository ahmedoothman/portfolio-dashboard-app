export default {
  data() {
    return {
      isAlertShown: false,
      message: 'Hello World!',
    };
  },
  methods: {
    showAlert() {
      this.isAlertShown = true;
    },
    hideAlert() {
      this.isAlertShown = false;
    },
  },
};
