<template>
  <form action="#" class="search-inputs flex items-end">
    <div class="input-field-wrapper">
      <div class="select-field-wrapper flex-div gap-[20px] mb-[30px]">
        <SelectField
          :options="[
            { value: '1 Night', name: '1 Night' },
            { value: '2 Nights', name: '2 Nights' },
            { value: '3 Nights', name: '3 Nights' },
          ]"
          label=""
          selectKey="value"
          selectName="name"
          v-model:value="tourObj.noOfNight"
          @select="tourObjSelectHandler($event, 'noOfNight')"
        />
        <SelectField
          :options="[
            { value: '1 Tourist', name: '1 Tourist' },
            { value: '2 Tourists', name: '2 Tourists' },
            { value: '3 Tourists', name: '3 Tourists' },
          ]"
          selectKey="value"
          selectName="name"
          label=""
          v-model:value="tourObj.noOfTourist"
          @select="tourObjSelectHandler($event, 'noOfTourist')"
        />
      </div>
      <div class="flex-div gap-3 grid-sm-break">
        <div>
          <InputField
            label="Going to?"
            placeholder="Country"
            id="country"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper long-inp-wrapper"
            :value="tourObj.countryCode"
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
        <div>
          <InputField
            label="Things to do at?"
            placeholder="Province/State"
            id="things-to-do"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper"
            :value="tourObj.stateCode"
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

        <div class="input-white-wrapper flex-div flex-row">
          <InputField
            label="Leaving on"
            :defaultValue="currentDate"
            id="departure-date"
            type="text"
            inputClass="ls-inp-field datepicker"
            :value="tourObj.originLocationName"
          />
          <span class="range-divider">-</span>
          <InputField
            label="Returning on"
            :defaultValue="currentDate"
            id="return-date"
            type="text"
            inputClass="ls-inp-field datepicker"
            :value="tourObj.originLocationName"
          />
        </div>
      </div>
    </div>
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
      <button class="tab-form-btn flex-div gap-3">
        <span>Search Tour</span>
        <img src="~/assets/images/beach-icon.svg" alt="beach-icon" />
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import M from "materialize-css";

export default defineComponent({
  setup() {
    const tourObj = ref({
      noOfTourist: "1 Tourist",
      noOfNight: "1 Night",
      countryCode: "",
      stateCode: "",
    });
    onMounted(async () => {
      const elemsDatepicker = document.querySelectorAll(".datepicker");
      M.Datepicker.init(elemsDatepicker, {
        autoClose: true,
        format: "mmm dd",
        minDate: new Date(),
      });
    });
    const getCurrentDate = () => {
      const date = new Date();
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate().toString().padStart(2, "0");
      return `${month} ${day}`;
    };
    const currentDate = getCurrentDate();
    const tourObjSelectHandler = (e: string, inputKey: string) => {
      tourObj.value = {
        ...tourObj.value,
        [inputKey]: e,
      };
    };
    return {
      currentDate,
      tourObj,
      tourObjSelectHandler,
    };
  },
});
</script>

<style></style>
