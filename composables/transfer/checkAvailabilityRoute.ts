import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useCheckAvailabilityRoute = () => {
  const loading = ref(false);
  const  checkAvailabilityRoute = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_check_availability_route(data);
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

  return { checkAvailabilityRoute, loading };
};