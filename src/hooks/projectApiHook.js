import { ref, inject, reactive } from 'vue';
import { useToast } from 'primevue/usetoast';
import {
  getProjectsService,
  addProjectService,
  deleteProjectService,
  getProjectService,
  updateProjectService,
} from '@/services/projectService';
export default function useProjectAPI() {
  const projects = ref([]);
  const isLoading = ref(false);
  const deleteLoading = reactive({
    id: '',
    loading: false,
  });
  const error = ref(null);
  const totalProjects = ref(0);
  const toast = useToast();
  //   inject
  const successToast = inject('successToast');
  const errorToast = inject('errorToast');
  //   get all projects data
  const getProjectsData = async () => {
    isLoading.value = true;
    const response = await getProjectsService();
    if (response.status === 'success') {
      projects.value = response.data;
      totalProjects.value = response.data.results;
    } else {
      error.value = response.error;
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };
  //   add project
  const addProject = async (data) => {
    isLoading.value = true;
    const response = await addProjectService(data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'Project added successfully',
      });
    } else {
      error.value = response.error;
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };
  //   delete project
  const deleteProject = async (id) => {
    deleteLoading.id = id;
    deleteLoading.value = true;
    const response = await deleteProjectService(id);
    if (response.status === 'success') {
      // remove project from projects array
      projects.value = projects.value.filter((project) => project._id !== id);

      toast.add({
        ...successToast,
        detail: 'Project deleted successfully',
      });
    } else {
      error.value = response.error;
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    deleteLoading.value = false;
  };
  //   get project
  const getProject = async (id) => {
    isLoading.value = true;
    const response = await getProjectService(id);
    if (response.status === 'success') {
      isLoading.value = false;
      return response.data;
    } else {
      error.value = response.error;
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };
  //   update project
  const updateProject = async (id, data) => {
    isLoading.value = true;
    const response = await updateProjectService(id, data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'Project updated successfully',
      });
    } else {
      error.value = response.error;
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };
  return {
    projects,
    isLoading,
    deleteLoading,
    error,
    totalProjects,
    getProjectsData,
    addProject,
    deleteProject,
    getProject,
    updateProject,
  };
}
