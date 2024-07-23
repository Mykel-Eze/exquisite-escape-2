import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useFetchTerminus = () => {
  const loading = ref(false);
  const terminusList = ref([])
  const  fetchTerminus = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_get_terminus(data);
      terminusList.value = response.data
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

  return { fetchTerminus, loading, terminusList };
};