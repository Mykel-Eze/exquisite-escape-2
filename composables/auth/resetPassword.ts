import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useResetPassword = () => {
  const loading = ref(false);
  const payload = ref({
    password: ''
  })
  const handleResetPassword = async () => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_reset_password(payload);
      return response;
    } catch (error: any) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { handleResetPassword, loading , payload};
};
