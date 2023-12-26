import { loginService } from '@/services/authService';
export default {
  data() {
    return {
      inputData: {
        email: '',
        password: '',
      },
      errorStates: {
        email: false,
        password: false,
      },
      pending: false,
    };
  },
  inject: ['successToast', 'errorToast'],
  methods: {
    validation(data) {
      // email
      if (data.email.trim() === '') {
        this.errorStates.email = true;
        return { error: true, message: 'email is empty' };
      } else {
        this.errorStates.email = false;
      }
      // password
      if (data.password.trim() === '') {
        this.errorStates.password = true;
        return { error: true, message: 'password is empty' };
      } else {
        this.errorStates.password = false;
      }
      return { error: false, message: '' };
    },
    async loginHandler() {
      const validationResponse = this.validation(this.inputData);
      if (validationResponse.error) {
        this.$toast.add({
          ...this.errorToast,
          detail: validationResponse.message,
        });
        return;
      }
      this.pending = true;
      const response = await loginService(
        this.inputData.email,
        this.inputData.password
      );

      if (response.status === 'success') {
        this.$router.push({ name: 'Home' });
      } else {
        this.$toast.add({
          ...this.errorToast,
          detail: response.message,
        });
      }
      this.pending = false;
    },
  },
};
