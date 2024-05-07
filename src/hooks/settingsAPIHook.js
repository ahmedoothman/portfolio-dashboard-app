import { ref, inject } from 'vue';
import { useToast } from 'primevue/usetoast';
import {
  getMeService,
  updateMeService,
  updateMyPasswordService,
} from '@/services/authService';

export default function useSettingsAPI() {
  const isLoading = ref(false);
  const toast = useToast();
  const successToast = inject('successToast');
  const errorToast = inject('errorToast');

  /* ******************************************************************** */
  /*                          Get Me Data                                */
  /* ******************************************************************** */
  const getMeData = async () => {
    isLoading.value = true;
    const response = await getMeService();
    if (response.status === 'success') {
      isLoading.value = false;
      return response.data;
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };

  /* ******************************************************************** */
  /*                          Update Me Data                              */
  /* ******************************************************************** */
  const updateMeData = async (data) => {
    isLoading.value = true;
    const response = await updateMeService(data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'User updated successfully',
      });
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };

  /* ******************************************************************** */
  /*                          Update My Password                          */
  /* ******************************************************************** */
  const updateMyPassword = async (data) => {
    isLoading.value = true;
    const response = await updateMyPasswordService(data);
    if (response.status === 'success') {
      toast.add({
        ...successToast,
        detail: 'Password updated successfully',
      });
    } else {
      toast.add({
        ...errorToast,
        detail: response.message,
      });
    }
    isLoading.value = false;
  };

  return {
    isLoading,
    getMeData,
    updateMeData,
    updateMyPassword,
  };
}
