<template>
  <form action="#" id="book-flight-tab" class="search-inputs flex items-end">
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
        <div class="select-field rel">
          <select v-model="flightObj.tripType" id="tripType">
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
            <option value="multi-city">Multi City</option>
          </select>
          <SvgIcons icon="caret" />
        </div>
        <SelectField
          :options="[
            { value: '1 passenger', label: '1 Passenger' },
            { value: '2 passenger', label: '2 Passenger' },
            { value: '3 passenger', label: '3 Passenger' },
          ]"
          label=""
          v-model="flightObj.passengersNumber"
        />
      </div>
      <div class="flex flex-col gap-7">
        <div class="flex-div gap-3 grid-sm-break">
          <div class="flex-div gap-3 rel arrival-depature-inputs">
            <InputField
              label="From where?"
              placeholder="City or Airport"
              id="depature"
              type="text"
              inputClass="ls-inp-field"
              divClass="input-white-wrapper"
              v-model="flightObj.originLocationCode"
              @input="($event) => inputHandler($event, 'to')"
            />
            <img
              src="~/assets/images/transfer-arrow.svg"
              alt="transfer-arrow"
              class="transfer-arrow"
            />
            <InputField
              label="To where?"
              placeholder="City or Airport"
              id="destination"
              type="text"
              inputClass="ls-inp-field"
              divClass="input-white-wrapper"
              v-model="flightObj.destinationLocationCode"
              @input="($event) => inputHandler($event, 'from')"
            />
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
            label="To where?"
            defaultValue="Economy"
            id="cabin-type"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper"
            v-model="flightObj.cabinType"
          />
        </div>
      </div>
    </div>
    <div class="tab-form-btn-wrapper">
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
      passengersNumber: "1 passenger",
      depature: "",
      destination: "",
      depatureDate: "",
      returnDate: "",
      cabinType: "",
    });
    const duplicatedRows = ref([]);

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
        const { data } = await useApiPost("/flight/airport-nearby", {
          keyword: e.target.value,
          subType: "CITY",
        });
        console.log(data);
      }
    };
    return {
      duplicatedRows,
      currentDate,
      flightObj,
      getCurrentDate,
      duplicateGridSmBreak,
      removeRow,
      datePicker,
      inputHandler,
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
