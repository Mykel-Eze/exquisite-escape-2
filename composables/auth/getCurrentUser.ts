import { authApiFactory  } from "@/apiFactory/modules/auth";

export const useGetCurrentUser = () => {
  const loading = ref(false);
  const currentUser = ref({})
  const fetchCurrentUser = async (token: string) => {
    loading.value = true;
    try {
      const response = await authApiFactory.$_current_user();
      currentUser.value = response.data
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

  return { fetchCurrentUser, loading, currentUser };
};
