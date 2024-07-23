import { tourApiFactory  } from "@/apiFactory/modules/tour";

export const useAddModifyBookingTour = () => {
  const loading = ref(false);
  const terminusList = ref([])
  const  addAndModifyBookingTour = async (data: string) => {
    loading.value = true;
    try {
      const response = await tourApiFactory.$_H_tour_booking_modify_add(data);
      terminusList.value = response.data
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

  return { addAndModifyBookingTour, loading, terminusList };
};