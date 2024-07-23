import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useFetchBooking = () => {
  const loading = ref(false);
  const bookingList = ref([])
  const  fetchBooking = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_fetch_bookings(data);
      bookingList.value = response.data
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

  return { fetchBooking, loading, bookingList };
};