import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useCancelBooking = () => {
  const loading = ref(false);
  const  cancelBooking = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_cancel_booking(data);
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

  return { cancelBooking, loading };
};