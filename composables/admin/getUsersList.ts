import { adminApiFactory  } from "@/apiFactory/modules/admin";

export const useGetAdminUsersList = () => {
  const loading = ref(false);
  const getUsersAdminList = async () => {
    loading.value = true;
    try {
      const response = await adminApiFactory.$_get_users_list();
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

  return { getUsersAdminList, loading };
};
