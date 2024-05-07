import { ref, reactive, inject } from 'vue';
import { useToast } from 'primevue/usetoast';
import {
  getTechnologiesService,
  addTechnologyService,
  getTechnologyService,
  updateTechnologyService,
  deleteTechnologyService,
} from '@/services/technologyService';

export default function useTechAPI() {
  const technologies = ref([]);
  const isContentLoading = ref(false);
  const deleteLoading = reactive({
    id: '',
    loading: false,
  });
  const toast = useToast();
  const successToast = inject('successToast');
  const errorToast = inject('errorToast');
  /* ******************************************************************** */
  /*                          Get All Data                                */
  /* ******************************************************************** */

  const getTechnologiesData = async () => {
    isContentLoading.value = true;
    const response = await getTechnologiesService();
    if (response.status === 'success') {
      technologies.value = response.data;
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isContentLoading.value = false;
  };

  /* ******************************************************************** */
  /*                          Add Data                                    */
  /* ******************************************************************** */
  const addTechnology = async (data) => {
    isContentLoading.value = true;
    const response = await addTechnologyService(data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'Technology added successfully',
      });
      // add new technology to the list
      technologies.value.push(response.data);
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isContentLoading.value = false;
  };

  /* ******************************************************************** */
  /*                          Delete Data                                 */
  /* ******************************************************************** */
  const deleteTechnology = async (id) => {
    deleteLoading.id = id;
    deleteLoading.loading = true;
    const response = await deleteTechnologyService(id);
    if (response.status === 'success') {
      technologies.value = technologies.value.filter((tech) => tech._id !== id);
      toast.add({
        ...successToast,
        detail: 'Technology deleted successfully',
      });
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    deleteLoading.loading = false;
  };

  /* ******************************************************************** */
  /*                          Get Single Data                             */
  /* ******************************************************************** */
  const getTechnology = async (id) => {
    isContentLoading.value = true;
    const response = await getTechnologyService(id);
    if (response.status === 'success') {
      return response.data;
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isContentLoading.value = false;
  };

  /* ******************************************************************** */
  /*                          Update Data                                 */
  /* ******************************************************************** */
  const updateTechnology = async (data) => {
    isContentLoading.value = true;
    const response = await updateTechnologyService(data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'Technology updated successfully',
      });
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isContentLoading.value = false;
  };

  return {
    technologies,
    isContentLoading,
    deleteLoading,
    getTechnologiesData,
    addTechnology,
    deleteTechnology,
    getTechnology,
    updateTechnology,
  };
}
