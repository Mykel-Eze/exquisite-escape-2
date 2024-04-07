<template>
  <div id="flight-result-page">
    <div v-if="isLoading">
      <p class="center text-2xl mt-16">Loading...</p>
    </div>
    <div v-else>
      <div class="top-section black-bg">
        <div class="row">
          <div class="container py-5">
            <div class="search-tab-wrapper">
              <FlightTab :search-object="searchObject" />
            </div>
          </div>
        </div>
      </div>

      <section class="results-section">
        <div class="row">
          <div class="container">
            <div class="result-main-wrapper">
              <div class="result-filter-side">
                <div class="rfs">
                  <FlightsFilter />
                </div>
              </div>
              <div class="result-contents-side py-10">
                <div class="px-[30px]">
                  <div class="top-snack-bar flex-div gap-2 mb-[30px]">
                    <span class="text-white"
                      >Choose flight from Lagos to London
                    </span>
                    <img
                      src="@/assets/images/chevron-right.svg"
                      alt="chevron-right"
                      class="right-arr"
                    />
                    <span class="text-[#9d9d9d]">Review your trip</span>
                  </div>
                  <div class="text-[18px] text-[#606161] leading-[26px]">
                    Prices displayed include taxes and may change based on
                    availability. You can review any additional fees before
                    checkout. Prices are not final until you complete your
                    purchase.
                  </div>
                </div>

                <CheapFlights />
                <FlightStops />

                <SortFlights
                  @view-ticket-clicked="viewHandler"
                  :flight-obj="flightObj"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FlightsSidePopup
        v-if="showPopup"
        :class="{ open: showPopup }"
        :selectedFlightObj="selectedFlightObj"
        @close-popup="showPopup = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const showPopup = ref(false);
    const searchObject = ref({});
    const flightObj = ref({});
    const isLoading = ref(true);
    const selectedFlightObj = ref({});
    const router = useRouter();
    onMounted(async () => {
      const searchObjFromStorage: any =
        sessionStorage.getItem("flightSearchObject");
      const parsedObjFromStorage: any = JSON.parse(searchObjFromStorage);
      searchObject.value = { ...parsedObjFromStorage };
      searchObject.value = {
        originLocationCode: searchObject.value.originLocationCode,
        destinationLocationCode: searchObject.value.destinationLocationCode
          ? searchObject.value.destinationLocationCode
          : undefined,
        departureDate: searchObject.value.departureDate,
        returnDate: searchObject.value.returnDate
          ? searchObject.value.returnDate
          : undefined,
        // includedAirlineCodes: "TG",
        travelClass: searchObject.value.travelClass,
        max: "10",
        currencyCode: "NGN",
        adults: Number(searchObject.value.adults),
      };
      const { data }: any = await useApiPost(
        "/flight/get/search-offer",
        searchObject.value
      );
      flightObj.value = data.value;
      isLoading.value = false;
    });
    const viewHandler = (selectedFlight: any) => {
      selectedFlightObj.value = {
        selectedFlight: { ...selectedFlight },
        flightDictionaries: { ...flightObj.value.dictionaries },
      };
      showPopup.value = true;
    };
    return {
      showPopup,
      isLoading,
      flightObj,
      selectedFlightObj,
      viewHandler,
    };
  },
});
</script>

<style></style>
