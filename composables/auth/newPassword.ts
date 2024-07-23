import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useNewPassword = () => {
  const loading = ref(false);
  const payload = ref({
    password: ''
  })
  const handleNewPassword = async (token: string) => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_new_password(payload, token);
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

  return { handleNewPassword, loading , payload};
};
