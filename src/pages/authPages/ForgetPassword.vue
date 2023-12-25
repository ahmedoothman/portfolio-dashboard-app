<template>
  <div>
    <AuthWrapper>
      <LogoBoxWide></LogoBoxWide>
      <form
        class="auth__form"
        @submit.prevent="forgetPasswordHandler"
        v-if="selectedForm === 'email'"
      >
        <InputSmall
          type="email"
          v-model.trim="inputData.email"
          placeholder="email"
          :error="errorStates.email"
        />
        <br />

        <ButtonSmall type="button" text="submit" v-if="!pendingEmail"
          >Submit</ButtonSmall
        >
        <ButtonSmall type="button" text="submit" v-if="pendingEmail">
          <SpinnerSmall />
        </ButtonSmall>
      </form>
      <form
        class="auth__form"
        @submit.prevent="resetPasswordHandler"
        v-if="selectedForm === 'otp'"
      >
        <InlineMessage severity="info">OTP has been sent </InlineMessage>
        <br />
        <br />
        <InputSmall
          type="text"
          v-model.trim="inputData.otp"
          placeholder="otp"
          :error="errorStates.otp"
        />
        <InputSmall
          type="password"
          v-model.trim="inputData.password"
          placeholder="password"
          :error="errorStates.password"
        />
        <InputSmall
          type="password"
          v-model.trim="inputData.passwordConfirm"
          placeholder="confirm password"
          :error="errorStates.passwordConfirm"
        />
        <br />
        <ButtonSmall type="button" text="submit" v-if="!pendingOtp"
          >Submit</ButtonSmall
        >
        <ButtonSmall type="button" text="submit" v-if="pendingOtp">
          <SpinnerSmall />
        </ButtonSmall>
      </form>
    </AuthWrapper>
  </div>
</template>

<script>
import LogoBoxWide from '@/components/LogoBoxWide.vue';
import AuthWrapper from '@/components/wrappers/AuthWrapper.vue';
import InputSmall from '@/components/ui/InputSmall.vue';
import ButtonSmall from '@/components/ui/ButtonSmall.vue';
// primevue
import InlineMessage from 'primevue/inlinemessage';
// import mixins
import forgetPasswordMixin from '@/mixins/AuthMixins/forgetPasswordMixin';
export default {
  name: 'ForgetPassword',
  components: {
    LogoBoxWide,
    AuthWrapper,
    InputSmall,
    ButtonSmall,
    InlineMessage,
  },
  mixins: [forgetPasswordMixin],
};
</script>

<style src="./ForgetPassword.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
