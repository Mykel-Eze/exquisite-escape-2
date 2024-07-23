import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useCheckAvailability = () => {
  const loading = ref(false);
  const  checkAvailability = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_check_availability(data);
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

  return { checkAvailability, loading };
};