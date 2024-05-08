<template>
  <div class="profile-settings-page">
    <h1>Password Settings</h1>
    <div class="form-container">
      <form @submit.prevent="formHandler">
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password
              id="passwordCurrent"
              placeholder="Current Password"
              v-model="passwordCurrent"
              toggleMask
            />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password
              id="password"
              placeholder="New Password"
              v-model="password"
              toggleMask
            >
              <template #header>
                <h5>Password should be at least 8 letters</h5>
              </template>
            </Password>
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password
              id="passwordConfirm"
              placeholder="Confirm New Password"
              v-model="passwordConfirm"
              toggleMask
            />
          </InputGroup>
        </div>

        <ButtonSmall type="button" v-if="!isLoading">Save</ButtonSmall>
        <ButtonSmall type="button" v-if="isLoading"
          ><i
            class="pi pi-spin pi-spinner"
            style="font-size: 20px; color: #fff"
          ></i
        ></ButtonSmall>
      </form>
    </div>
  </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import Password from 'primevue/password';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { ref, onMounted } from 'vue';
import useSettingsAPI from '@/hooks/settingsAPIHook';
import { signOut } from '@/services/authService';
export default {
  name: 'PasswordSettingsPage',
  components: {
    InputGroup,
    Password,
    InputGroupAddon,
  },
  setup() {
    const passwordCurrent = ref('');
    const password = ref('');
    const passwordConfirm = ref('');

    const { updateMyPassword, isLoading } = useSettingsAPI();

    // methods
    const formHandler = async () => {
      const data = {
        passwordCurrent: passwordCurrent.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      };
      await updateMyPassword(data);
      signOut();
    };
    // lifecycle
    onMounted(async () => {});
    return {
      passwordCurrent,
      password,
      passwordConfirm,
      isLoading,
      formHandler,
    };
  },
};
</script>

<style src="./PasswordSettingsPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
