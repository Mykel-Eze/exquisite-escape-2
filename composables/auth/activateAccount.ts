import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useActivateAccount = () => {
  const loading = ref(false);
  const activateAccount = async (token: string) => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_activate_account(token);
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

  return { activateAccount, loading };
};
