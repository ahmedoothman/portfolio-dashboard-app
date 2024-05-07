<template>
  <div class="profile-settings-page">
    <h1>Profile Settings</h1>
    <div class="form-container">
      <form @submit.prevent="formHandler">
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText id="name" placeholder="name" v-model="name" />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-envelope"></i>
            </InputGroupAddon>
            <InputText id="email" placeholder="email" v-model="email" />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-info"></i>
            </InputGroupAddon>
            <Textarea
              id="bio"
              placeholder="bio"
              v-model="bio"
              :autoResize="true"
              rows="5"
            >
            </Textarea>
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
import InputText from 'primevue/inputtext';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Textarea from 'primevue/textarea';
import { ref, onMounted } from 'vue';
import useSettingsAPI from '@/hooks/settingsAPIHook';
export default {
  name: 'ProfileSettingsPage',
  components: {
    InputGroup,
    InputText,
    InputGroupAddon,
    Textarea,
  },
  setup() {
    const name = ref('');
    const email = ref('');
    const bio = ref('');

    const { getMeData, updateMeData, isLoading } = useSettingsAPI();

    // methods
    const formHandler = async () => {
      const data = {
        name: name.value,
        email: email.value,
        bio: bio.value,
      };
      await updateMeData(data);
    };
    // lifecycle
    onMounted(async () => {
      const data = await getMeData();
      name.value = data.name;
      email.value = data.email;
      bio.value = data.bio;
    });
    return {
      name,
      email,
      bio,
      isLoading,
      formHandler,
    };
  },
};
</script>

<style src="./ProfileSettingsPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
