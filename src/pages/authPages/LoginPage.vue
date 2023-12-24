<template>
  <div class="auth">
    <AuthWrapper>
      <LogoBoxWide></LogoBoxWide>
      <form class="auth__form" @submit.prevent="loginHandler">
        <InputSmall
          type="email"
          v-model.trim="inputData.email"
          placeholder="email"
          :error="errorStates.email"
        />
        <InputSmall
          type="password"
          v-model.trim="inputData.password"
          placeholder="password"
          :error="errorStates.password"
        />
        <div class="forgot-password">
          <router-link to="/forget-password">Forgot password?</router-link>
        </div>
        <br />
        <ButtonSmall type="button" text="login">Login</ButtonSmall>
      </form>
    </AuthWrapper>
  </div>
</template>

<script>
import AuthWrapper from '@/components/wrappers/AuthWrapper.vue';
import LogoBoxWide from '@/components/LogoBoxWide.vue';
import InputSmall from '@/components/ui/InputSmall.vue';
import ButtonSmall from '@/components/ui/ButtonSmall.vue';

export default {
  name: 'LoginPage',
  components: {
    LogoBoxWide,
    AuthWrapper,
    InputSmall,
    ButtonSmall,
  },
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
    };
  },
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
    loginHandler() {
      const validationResponse = this.validation(this.inputData);
      console.log(validationResponse);
      // if validation error show error message
      // if no validation error send data to server && redirect to home page
    },
  },
};
</script>

<style src="./LoginPage.scss" lang="scss" scoped></style>
