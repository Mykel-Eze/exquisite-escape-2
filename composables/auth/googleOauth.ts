import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useGoogleOAuth = () => {
  const loading = ref(false);
  const handleGoogleOAuth = async (code: string) => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_google_oauth(code);
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

  return { handleGoogleOAuth, loading };
};
