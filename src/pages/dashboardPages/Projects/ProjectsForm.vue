<template>
  <div class="container">
    <div class="form-header">
      <h1>{{ formName }}</h1>
    </div>
    <br />
    <form @submit.prevent="addProjectLocal">
      <div class="inputs">
        <div class="part">
          <div class="form-group">
            <label for="name">Project Name</label>
            <input type="text" id="name" name="name" v-model="project.name" />
          </div>
          <div class="form-group">
            <label for="type">Project Type</label>
            <select id="type" name="type" v-model="project.type">
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tags">Tags | <span>seperate with ( , )</span></label>
            <input type="text" id="tags" name="tags" v-model="tagsTemp" />
          </div>
          <div class="form-group">
            <label for="technologies">Technologies </label>
            <select id="technologies" name="technologies" v-model="tech">
              <option
                v-for="item in technologies"
                :key="item._id"
                :value="item._id"
              >
                {{ item.name }}
              </option>
            </select>
            <div class="tech-list">
              <div
                v-for="item in project.technologies"
                :key="item"
                class="tech-item"
              >
                <!-- item has the id in the tech array find the name -->
                <span>{{ techName(item) }}</span>
                <span @click="removeTech(item)">
                  <!-- import svg close -->
                  <img src="@/assets/icons/close.svg" alt="close" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="part">
          <div class="form-group">
            <label for="link">Project Link</label>
            <input type="text" id="link" name="link" v-model="project.link" />
          </div>
          <div class="form-group">
            <label for="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              v-model="project.description"
            ></textarea>
          </div>
          <div class="form-group-file">
            <input
              type="file"
              id="images"
              name="images"
              accept=".png,.jpg,.jpeg"
              @input="imagesInputHandler"
              multiple
            />
            <div class="header-images">
              <label for="images">Choose Images</label>
              <p v-if="images.length === 0">no images selected</p>
              <p v-else>Selected : {{ images.length }} images</p>
            </div>

            <div class="customInputFile">
              <div class="images-list">
                <div
                  v-for="item in imagesPreview"
                  :key="item.name"
                  class="image-item"
                  :class="{ active: mainImage === item.name }"
                  @click="chooseMainImage(item.name)"
                >
                  <img :src="item.image" alt="image" />
                </div>
              </div>
            </div>
            <p class="note" v-if="images.length !== 0">
              Note : Select the main image by clicking on it
            </p>
          </div>
        </div>
      </div>
      <ButtonSmall type="button" v-if="!isLoading">
        {{ formType }} PROJECT
      </ButtonSmall>
      <ButtonSmall type="button" v-else>
        <SpinnerSmall />
      </ButtonSmall>
    </form>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useProjectApi from '@/hooks/projectApiHook';
// formData
export default {
  name: 'ProjectsForm',
  setup() {
    const router = useRouter();
    const formName = ref('ADD NEW PROJECT');
    const formType = ref('ADD');
    const technologies = ref([
      { _id: '657ee564bb07b225c84afa43', name: 'node js' },
      { _id: '657ee568bb07b225c84afa46', name: 'react js' },
      { _id: '657ee571bb07b225c84afa49', name: 'vue js' },
    ]);
    const images = ref([]); // array of images will be uploaded
    const imagesPreview = ref([]);
    const mainImage = ref(''); // the main image
    const { isLoading, addProject } = useProjectApi();
    // data
    const project = ref({
      name: '',
      type: 'web',
      tags: [],
      technologies: [],
      link: '',
      description: '',
    });
    const tech = ref('');
    const tagsTemp = ref('');

    const formData = new FormData();
    // methods
    const addProjectLocal = async () => {
      // add the project data to the formData
      formData.append('name', project.value.name);
      formData.append('type', project.value.type);

      formData.append('tags', JSON.stringify(project.value.tags));
      formData.append('techs', JSON.stringify(project.value.technologies));
      formData.append('link', project.value.link);
      formData.append('description', project.value.description);
      formData.append('mainImage', mainImage.value);
      images.value.forEach((item) => {
        formData.append('images', item);
      });
      await addProject(formData);
      // navigate to projects
      router.push({ name: 'projects' });
    };

    const techName = (id) => {
      const tech = technologies.value.find((item) => item._id === id);
      return tech.name;
    };

    const removeTech = (id) => {
      const index = project.value.technologies.findIndex((item) => item === id);
      project.value.technologies.splice(index, 1);
    };
    // watch
    watch(tech, (value) => {
      // check if value is not already in the array
      if (project.value.technologies.indexOf(value) === -1) {
        project.value.technologies.push(value);
      }
    });
    watch(tagsTemp, (value) => {
      // check if there is only one tag by check if the value has no , in it
      if (value.indexOf(',') === -1) {
        project.value.tags.push(value);

        return;
      } else if (value) {
        project.value.tags = value.split(',');
      }
    });
    // methods
    const imagesInputHandler = (e) => {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        images.value.push(files[i]);
        const reader = new FileReader();
        // same process but add field for name and image in the imagesPreview array
        reader.onload = (e) => {
          imagesPreview.value.push({
            image: e.target.result,
            name: files[i].name,
          });
        };
        reader.readAsDataURL(files[i]);
      }
    };

    const chooseMainImage = (name) => {
      mainImage.value = name;
    };
    onMounted(() => {
      //   if there is an id in the params then we are in edit mode
      if (router.currentRoute.value.params.id) {
        formName.value = 'EDIT PROJECT';
        formType.value = 'EDIT';
      } else {
        formName.value = 'ADD NEW PROJECT';
        formType.value = 'ADD';
      }
    });
    return {
      project,
      technologies,
      tech,
      tagsTemp,
      formName,
      formType,
      images,
      imagesPreview,
      mainImage,
      imagesInputHandler,
      chooseMainImage,
      techName,
      addProjectLocal,
      removeTech,
      isLoading,
    };
  },
};
</script>

<style lang="scss" src="./ProjectsForm.scss" scoped></style>
