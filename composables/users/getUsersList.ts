import { usersApiFactory  } from "@/apiFactory/modules/users";

export const useGetUsersList = () => {
  const loading = ref(false);
  const usersList = ref([])
  const getUsersList = async () => {
    loading.value = true;
    try {
      const response = await usersApiFactory.$_get_users_list();
      usersList.value = response.data
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

  return { getUsersList, loading };
};
