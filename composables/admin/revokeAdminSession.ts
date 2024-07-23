import { adminApiFactory  } from "@/apiFactory/modules/admin";

export const useRevokeSession = () => {
  const loading = ref(false);
  const revokeSession = async () => {
    loading.value = true;
    try {
      const response = await adminApiFactory.$_revoke_session();
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

  return { revokeSession, loading };
};
