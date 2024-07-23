import { cmsApiFactory  } from "@/apiFactory/modules/cms";

export const useGetBlogs = () => {
  const loading = ref(false);
  const blogs  = ref({})
  const  getBlogs= async (id: string) => {
    loading.value = true;
    try {
      const response = await cmsApiFactory.$_get_blogs();
      blogs.value = response.data
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

  return { getBlogs, loading, blogs };
};