import {
  forgetPasswordService,
  resetPasswordService,
} from '@/services/authService';
export default {
  inject: ['successToast', 'errorToast'],
  data() {
    return {
      selectedForm: 'email',
      inputData: {
        email: '',
        otp: '',
        password: '',
        passwordConfirm: '',
      },
      errorStates: {
        email: false,
        otp: false,
        password: false,
        passwordConfirm: false,
      },
      pendingEmail: false,
      pendingOtp: false,
    };
  },
  methods: {
    async forgetPasswordHandler() {
      if (this.inputData.email === '') {
        this.errorStates.email = true;
        this.$toast.add({
          ...this.errorToast,
          detail: 'email is empty',
        });
        return;
      }
      const response = await forgetPasswordService(this.inputData.email);
      if (response.status === 'success') {
        this.$toast.add({
          ...this.successToast,
          detail: 'otp sent successfully',
        });
        this.selectedForm = 'otp';
      } else {
        this.$toast.add({
          ...this.errorToast,
          detail: response.message,
        });
      }
    },
    validateResetForm() {
      // otp
      if (this.inputData.otp.trim() === '') {
        this.errorStates.otp = true;
        return { error: true, message: 'otp is empty' };
      } else {
        this.errorStates.otp = false;
      }
      // password
      if (this.inputData.password.trim() === '') {
        this.errorStates.password = true;
        return { error: true, message: 'password is empty' };
      } else {
        this.errorStates.password = false;
      }
      // passwordConfirm
      if (this.inputData.passwordConfirm.trim() === '') {
        this.errorStates.passwordConfirm = true;
        return { error: true, message: 'passwordConfirm is empty' };
      } else {
        this.errorStates.passwordConfirm = false;
      }
      // password and passwordConfirm should be equal
      if (this.inputData.password !== this.inputData.passwordConfirm) {
        this.errorStates.password = true;
        this.errorStates.passwordConfirm = true;
        return {
          error: true,
          message: 'password and passwordConfirm should be equal',
        };
      } else {
        this.errorStates.password = false;
        this.errorStates.passwordConfirm = false;
      }
      return { error: false, message: '' };
    },
    async resetPasswordHandler() {
      const validationResponse = this.validateResetForm();
      if (validationResponse.error) {
        console.log(validationResponse.error);
        this.$toast.add({
          ...this.errorToast,
          detail: validationResponse.message,
        });
        return;
      }
      const response = await resetPasswordService(
        this.inputData.otp,
        this.inputData.password,
        this.inputData.passwordConfirm
      );
      if (response.status === 'success') {
        this.$toast.add({
          ...this.successToast,
          detail: response.message,
        });
        this.$router.push({ name: 'Login' });
      } else {
        this.$toast.add({
          ...this.errorToast,
          detail: response.message,
        });
      }
    },
  },
};
