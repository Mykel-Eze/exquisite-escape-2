import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useFetchCountries = () => {
  const loading = ref(false);
  const countriesList = ref([])
  const  fetchCountries = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_get_countries(data);
      countriesList.value = response.data
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

  return { fetchCountries, loading, countriesList };
};