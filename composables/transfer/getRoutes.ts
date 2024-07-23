import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useFetchRoutes = () => {
  const loading = ref(false);
  const routesList = ref([])
  const  fetchRoutes = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_get_routes(data);
      routesList.value = response.data
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

  return { fetchRoutes, loading, routesList };
};