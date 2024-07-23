import { cmsApiFactory  } from "@/apiFactory/modules/cms";

export const useGetFooter = () => {
  const loading = ref(false);
  const footer  = ref([])
  const  getFooter = async (data: string) => {
    loading.value = true;
    try {
      const response = await cmsApiFactory.$_get_footers(data);
      footer.value = response.data
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

  return { getFooter, loading, footer };
};