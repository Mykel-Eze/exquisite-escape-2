<template>
  <form id="book-flight-tab" class="search-inputs flex items-end">
    <div class="input-field-wrapper">
      <div class="select-field-wrapper flex-div gap-[10px] mb-[30px]">
        <!-- <SelectField 
                    :options="[
                        { value: 'one-way', label: 'One Way' },
                        { value: 'round-trip', label: 'Round Trip' },
                        { value: 'multi-city', label: 'Multi City' }
                    ]"
                    label=""
                    v-model="tripType"
                    id="tripType"
                /> -->

        <SelectField
          :options="[
            { value: 'one-way', name: 'one-way' },
            { value: 'round-trip', name: 'round-trip' },
            { value: 'multi-city', name: 'multi-city' },
          ]"
          label=""
          selectKey="value"
          selectName="name"
          v-model:value="flightObj.tripType"
          @select="flightObjSelectHandler($event, 'tripType')"
        />
        <SelectField
          :options="[
            { value: '1', name: '1 Passenger' },
            { value: '2', name: '2 Passenger' },
            { value: '3', name: '3 Passenger' },
          ]"
          label=""
          selectKey="value"
          selectName="name"
          v-model:value="flightObj.passengersNumber"
          @select="flightObjSelectHandler($event, 'passengersNumber')"
        />
      </div>
      <div class="flex flex-col gap-7">
        <div class="flex-div gap-3 grid-sm-break">
          <div class="flex-div gap-3 rel arrival-depature-inputs">
            <div>
              <InputField
                label="From where?"
                placeholder="City or Airport"
                id="depature"
                type="text"
                inputClass="ls-inp-field"
                divClass="input-white-wrapper relative"
                :value="flightObj.originLocationName"
                @input="($event) => inputHandler($event, 'from')"
              />
              <div
                v-if="showDropdown.showFromDropdown"
                class="absolute bg-white mt-1"
              >
                <ul>
                  <li
                    v-for="(flight, index) in fromFlightList"
                    :key="index"
                    class="text-dark-gray py-2 px-4"
                    @click="selectFlightHandler(flight, 'from')"
                  >
                    {{ flight.name }}
                  </li>
                </ul>
              </div>
            </div>

            <img
              src="~/assets/images/transfer-arrow.svg"
              alt="transfer-arrow"
              class="transfer-arrosw"
            />
            <div>
              <InputField
                label="To where?"
                placeholder="City or Airport"
                id="destination"
                type="text"
                inputClass="ls-inp-field"
                divClass="input-white-wrapper"
                :value="flightObj.destinationLocationName"
                @input="($event) => inputHandler($event, 'to')"
              />
              <div
                v-if="showDropdown.showToDropdown"
                class="absolute bg-white mt-1"
              >
                <ul>
                  <li
                    v-for="(flight, index) in toFlightList"
                    :key="index"
                    class="text-dark-gray py-2 px-4"
                    @click="selectFlightHandler(flight, 'to')"
                  >
                    {{ flight.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="input-white-wrapper flex-div flex-row">
            <InputField
              label="Leaving on"
              :defaultValue="currentDate"
              id="departure-date"
              type="text"
              inputClass="ls-inp-field datepicker"
              v-model="flightObj.depatureDate"
            />
            <span class="range-divider">-</span>
            <InputField
              label="Returning on"
              :defaultValue="currentDate"
              id="return-date"
              type="text"
              inputClass="ls-inp-field datepicker"
              v-model="flightObj.returnDate"
            />
          </div>

          <InputField
            label="Cabin Type"
            defaultValue="Economy"
            id="cabin-type"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper"
            v-model="flightObj.cabinType"
          />
          <div class="tab-form-btn-wrapper">
            <div
              class="tfbw-div flex-div justify-center gap-[10px] text-[18px] mb-[20px]"
            >
              <img
                src="~/assets/images/best-check.svg"
                alt="best-check"
                class="best-check"
              />
              <span>Best Deal Guaranteed </span>
            </div>
            <button
              v-if="flightObj.tripType === 'multi-city'"
              class="tab-form-btn tfb-2 flex-div gap-3"
              type="button"
              @click="duplicateGridSmBreak"
            >
              <span>Add Flight</span>
              <img src="~/assets/images/plus-rectangle.svg" alt="plus-icon" />
            </button>
            <button class="tab-form-btn flex-div gap-3" @click="searchFlight()">
              <span>Search Flights</span>
              <img src="~/assets/images/plane-icon.svg" alt="plane-icon" />
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="tab-form-btn-wrapper">
      <div class="flex-div justify-center gap-[10px] text-[18px] mb-[20px]">
        <img
          src="~/assets/images/best-check.svg"
          alt="best-check"
          class="best-check"
        />
        <span>Best Deal Guaranteed </span>
      </div>
      <button
        v-if="tripType === 'multi-city'"
        class="tab-form-btn tfb-2 flex-div gap-3"
        type="button"
        @click="duplicateGridSmBreak"
      >
        <span>Add Flight</span>
        <img src="~/assets/images/plus-rectangle.svg" alt="plus-icon" />
      </button>
      <button class="tab-form-btn flex-div gap-3">
        <span>Search Flights</span>
        <img src="~/assets/images/plane-icon.svg" alt="plane-icon" />
      </button>
    </div> -->
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import M from "materialize-css";

export default defineComponent({
  name: "FlightTab",

  setup() {
    const flightObj = ref({
      tripType: "one-way",
      passengersNumber: "1",
      depature: "",
      destination: "",
      depatureDate: "",
      returnDate: "",
      cabinType: "",
      originLocationName: "",
      originLocationCode: "",
      destinationLocationName: "",
      destinationLocationCode: "",
    });
    const duplicatedRows = ref([]);
    const toFlightList = ref([]);
    const fromFlightList = ref([]);
    const showDropdown = ref({
      showToDropdown: false,
      showFromDropdown: false,
    });

    onMounted(async () => {
      const elemsDatepicker = document.querySelectorAll(".datepicker");
      M.Datepicker.init(elemsDatepicker, {
        autoClose: true,
        format: "mmm dd",
        minDate: new Date(),
      });

      const elemsDropdown2 = document.querySelector("select#tripType");
      M.FormSelect.init(elemsDropdown2);
    });

    const getCurrentDate = () => {
      const date = new Date();
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate().toString().padStart(2, "0");
      return `${month} ${day}`;
    };
    const currentDate = getCurrentDate();

    const duplicateGridSmBreak = () => {
      const gridSmBreak: any = document.querySelector(".grid-sm-break");
      const clonedGridSmBreak = gridSmBreak.cloneNode(true);

      // Set default values for duplicated inputs
      const inputs = clonedGridSmBreak.querySelectorAll(
        ".arrival-depature-inputs input"
      );
      inputs.forEach((input: any) => {
        input.value = input.defaultValue;
      });

      gridSmBreak.parentNode.appendChild(clonedGridSmBreak);
    };
    const removeRow = (index: number) => {
      this.duplicatedRows.splice(index, 1);
    };
    const datePicker = () => {
      const elemsDatepicker = document.querySelectorAll(".datepicker");
      M.Datepicker.init(elemsDatepicker, {
        autoClose: true,
        format: "mmm dd",
        minDate: new Date(),
      });
    };
    const inputHandler = async (e: any, inputKey: string) => {
      if (e.target.value.length >= 3) {
        const { data }: any = await useApiPost("/flight/airport-nearby", {
          keyword: e.target.value,
          subType: "CITY",
        });
        if (inputKey === "to") {
          toFlightList.value = data.value.data;
          showDropdown.value.showToDropdown = true;
        } else {
          fromFlightList.value = data.value.data;
          showDropdown.value.showFromDropdown = true;
        }
      }
    };
    const searchFlight = async () => {
      const payload = {
        currencyCode: "USD",
        originDestinations: [
          {
            originLocationCode: flightObj.value.originLocationCode,
            destinationLocationCode: flightObj.value.destinationLocationCode,
            departureDateTimeRange: {
              date: flightObj.value.depatureDate,
              time: "00:00:00",
            },
            travelers: {
              travelerType: "adult",
              fareOptions: ["STANDARD"],
            },
            // sources: ["GDS"],
          },
        ],
      };
      await useApiPost("/flight/search-offer", payload);
    };
    const selectFlightHandler = async (flight: any, inputKey: string) => {
      if (inputKey === "from") {
        flightObj.value = {
          ...flightObj.value,
          originLocationName: flight.name,
          originLocationCode: flight.iataCode,
        };
        showDropdown.value.showFromDropdown = false;
      } else {
        flightObj.value = {
          ...flightObj.value,
          destinationLocationName: flight.name,
          destinationLocationCode: flight.iataCode,
        };
        showDropdown.value.showToDropdown = false;
      }
    };
    const flightObjSelectHandler = (e: string, inputKey: string) => {
      flightObj.value = {
        ...flightObj.value,
        [inputKey]: e,
      };
    };
    return {
      duplicatedRows,
      currentDate,
      flightObj,
      toFlightList,
      fromFlightList,
      getCurrentDate,
      showDropdown,
      duplicateGridSmBreak,
      removeRow,
      datePicker,
      inputHandler,
      searchFlight,
      selectFlightHandler,
      flightObjSelectHandler,
    };
  },
});
</script>

<style>
.remove-btn {
  background: red;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
}
</style>
