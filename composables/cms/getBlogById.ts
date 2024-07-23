import { cmsApiFactory  } from "@/apiFactory/modules/cms";

export const useGetBlogById = () => {
  const loading = ref(false);
  const blog = ref({})
  const  getBlogById= async (id: string) => {
    loading.value = true;
    try {
      const response = await cmsApiFactory.$_get_blogs_by_id(id);
      blog.value = response.data
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

  return { getBlogById, loading, blog};
};