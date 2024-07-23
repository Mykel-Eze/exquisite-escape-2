import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useGetBookingDetails = () => {
  const loading = ref(false);
  const bookingDetails  = ref({})
  const  getBookingDetails = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_booking_details(data);
      bookingDetails.value = response.data
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

  return { getBookingDetails, loading, bookingDetails };
};