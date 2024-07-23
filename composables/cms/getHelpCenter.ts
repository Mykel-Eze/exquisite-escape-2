import { cmsApiFactory  } from "@/apiFactory/modules/cms";

export const useGetHelpCenter = () => {
  const loading = ref(false);
  const helpCenter  = ref([])
  const  getHelpCenter = async (data: string) => {
    loading.value = true;
    try {
      const response = await cmsApiFactory. $_get_help_center_nav(data);
      helpCenter.value = response.data
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

  return { getHelpCenter, loading, helpCenter };
};