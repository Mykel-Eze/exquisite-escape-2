import { transferApiFactory  } from "@/apiFactory/modules/transfer";

export const useGetBookTransfer = () => {
  const loading = ref(false);
  const  bookTransfer = async (data: string) => {
    loading.value = true;
    try {
      const response = await transferApiFactory.$_book_transfer(data);
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

  return { bookTransfer, loading };
};