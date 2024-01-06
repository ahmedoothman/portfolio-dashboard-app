<template>
  <div class="container">
    <div class="form-header">
      <h1>{{ formName }}</h1>
    </div>
    <br />
    <form>
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
        </div>
      </div>
      <ButtonSmall type="button"> {{ formType }} PROJECT </ButtonSmall>
    </form>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
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
    const project = ref({
      name: '',
      type: 'web',
      tags: '',
      technologies: [],
      link: '',
      description: '',
    });
    const tech = ref('');
    const tagsTemp = ref('');
    const addProject = () => {
      console.log(project.value);
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
      project.value.tags = value.split(',');
      console.log(project.value.tags);
    });

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
      techName,
      addProject,
      removeTech,
    };
  },
};
</script>

<style lang="scss" src="./ProjectsForm.scss" scoped></style>
