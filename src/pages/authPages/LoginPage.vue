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
          <router-link to="/forget-password">Forgot Password?</router-link>
        </div>
        <br />
        <ButtonSmall type="button" text="login" v-if="!pending"
          >Login</ButtonSmall
        >
        <ButtonSmall type="button" text="login" v-if="pending">
          <SpinnerSmall />
        </ButtonSmall>
      </form>
    </AuthWrapper>
  </div>
</template>

<script>
import LogoBoxWide from '@/components/LogoBoxWide.vue';
import InputSmall from '@/components/ui/InputSmall.vue';
import ButtonSmall from '@/components/ui/ButtonSmall.vue';
// import mixins
import loginMixin from '@/mixins/AuthMixins/loginMixin';
import SpinnerSmall from '@/components/ui/SpinnerSmall.vue';
export default {
  name: 'LoginPage',
  components: {
    LogoBoxWide,
    InputSmall,
    ButtonSmall,
    SpinnerSmall,
  },

  mixins: [loginMixin],
};
</script>

<style src="./LoginPage.scss" lang="scss" scoped></style>
