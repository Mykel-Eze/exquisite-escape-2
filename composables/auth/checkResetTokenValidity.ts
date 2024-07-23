import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useCheckTokenValidity = () => {
  const loading = ref(false);
  const checkTokenValidity = async (token: string) => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_check_reset_token_validity(token);
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

  return { checkTokenValidity, loading };
};
