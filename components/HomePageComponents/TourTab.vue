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
            @input="($event) => inputHandler($event, 'countryCode')"
          />
          <div
            v-if="showDropdown.countryDropdown"
            class="absolute bg-white mt-1"
          >
            <ul>
              <li
                v-for="(flight, index) in countryList"
                :key="index"
                class="text-dark-gray py-2 px-4"
                @click="selectTourHandler(flight, 'countryCode')"
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
            @input="($event) => inputHandler($event, 'stateCode')"
          />
          <div v-if="showDropdown.stateDropdown" class="absolute bg-white mt-1">
            <ul>
              <li
                v-for="(flight, index) in stateList"
                :key="index"
                class="text-dark-gray py-2 px-4"
                @click="selectTourHandler(flight, 'stateCode')"
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
            :value="tourObj.departureDate"
          />
          <span class="range-divider">-</span>
          <InputField
            label="Returning on"
            :defaultValue="currentDate"
            id="return-date"
            type="text"
            inputClass="ls-inp-field datepicker"
            :value="tourObj.destinationDate"
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
      departureDate: "",
      destinationDate: "",
    });
    const showDropdown = ref({
      countryDropdown: false,
      stateDropdown: false,
    });
    const countryList = ref({});
    const stateList = ref({});
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
    const inputHandler = async (e: any, inputKey: string) => {
      if (e.target.value.length >= 3) {
        if (inputKey === "countryCode") {
          const { data }: any = await useApiPost("", {
            keyword: e.target.value,
            subType: "CITY",
          });
          countryList.value = data.value.data;
          showDropdown.value.countryDropdown = true;
        } else {
          const { data }: any = await useApiPost("", {
            keyword: e.target.value,
            subType: "CITY",
          });
          stateList.value = data.value.data;
          showDropdown.value.stateDropdown = true;
        }
      }
    };
    return {
      currentDate,
      tourObj,
      showDropdown,
      countryList,
      stateList,
      inputHandler,
      tourObjSelectHandler,
    };
  },
});
</script>

<style></style>
