<template>
  <div class="profile-settings-page">
    <h1>Profile Settings</h1>
    <div class="form-container">
      <form @submit.prevent="formHandler">
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-facebook"></i>
            </InputGroupAddon>
            <InputText
              id="facebook"
              placeholder="facebook"
              v-model="facebook"
            />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-linkedin"></i>
            </InputGroupAddon>
            <InputText
              id="linkedin"
              placeholder="linkedin"
              v-model="linkedin"
            />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-link"></i>
            </InputGroupAddon>
            <InputText id="behance" placeholder="behance" v-model="behance" />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-github"></i>
            </InputGroupAddon>
            <InputText id="github" placeholder="github" v-model="github" />
          </InputGroup>
        </div>
        <div class="form-group">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-whatsapp"></i>
            </InputGroupAddon>
            <InputText
              id="whatsapp"
              placeholder="whatsapp"
              v-model="whatsapp"
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
import InputText from 'primevue/inputtext';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { ref, onMounted } from 'vue';
import useSettingsAPI from '@/hooks/settingsAPIHook';
export default {
  name: 'SmSettingsPage',
  components: {
    InputGroup,
    InputText,
    InputGroupAddon,
  },
  setup() {
    const facebook = ref('');
    const linkedin = ref('');
    const behance = ref('');
    const github = ref('');
    const whatsapp = ref('');

    const { getMeData, updateMeData, isLoading } = useSettingsAPI();

    // methods
    const formHandler = async () => {
      const data = {
        socialMedia: {
          facebook: facebook.value,
          linkedin: linkedin.value,
          behance: behance.value,
          github: github.value,
          whatsapp: whatsapp.value,
        },
      };
      await updateMeData(data);
    };
    // lifecycle
    onMounted(async () => {
      const data = await getMeData();
      facebook.value = data.socialMedia.facebook;
      linkedin.value = data.socialMedia.linkedin;
      behance.value = data.socialMedia.behance;
      github.value = data.socialMedia.github;
      whatsapp.value = data.socialMedia.whatsapp;
    });
    return {
      facebook,
      linkedin,
      behance,
      github,
      whatsapp,
      isLoading,
      formHandler,
    };
  },
};
</script>

<style src="./SmSettingsPage.scss" lang="scss" scoped>
/* Add your component styles here */
</style>
