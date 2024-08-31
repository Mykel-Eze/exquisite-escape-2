<template>
  <form action="#" class="search-inputs flex items-end">
    <div class="input-field-wrapper">
      <div class="select-field-wrapper flex-div gap-[20px] mb-[30px]">
        <TouristSelector v-model:value="tourObj.noOfTourist" />
      </div>
      <div class="flex-div gap-3 grid-sm-break">
        <div class="relative">
          <InputField
            label="Going to?"
            placeholder="Country"
            id="country"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper long-inp-wrapper"
            :modelValue="tourObj.countryCode"
            @update:modelValue="(value) => inputHandler(value, 'countryCode')"
          />

          <div v-if="showCountryDropdown" class="absolute bg-white mt-1 search-dropdown-wrapper">
            <ul>
              <li 
                v-for="country in filteredCountryList" 
                :key="country.code" 
                class="text-dark-gray py-2 px-4 cursor-pointer"
                @click="selectCountry(country)"
              >
                {{ country.description.content }}
              </li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <InputField
            label="Things to do at?"
            placeholder="Province/State"
            id="things-to-do"
            type="text"
            inputClass="ls-inp-field"
            divClass="input-white-wrapper"
            :modelValue="tourObj.stateCode"
            @update:modelValue="(value) => inputHandler(value, 'stateCode')"
            @focus="showStateDropdownOnFocus"
          />
          <div v-if="showStateDropdown" class="absolute bg-white mt-1 search-dropdown-wrapper">
            <ul>
              <li 
                v-for="state in stateList" 
                :key="state.code" 
                class="text-dark-gray py-2 px-4 cursor-pointer"
                @click="selectState(state)"
              >
                {{ state.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="input-white-wrapper flex-div flex-row">
          <DatePicker
            label="Leaving on"
            :defaultValue="currentDate"
            id="departure-date"
            type="text"
            inputClass="ls-inp-field datepicker"
            :value="tourObj.departureDate"
          />
          <span class="range-divider">-</span>
          <DatePicker
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
      <button class="tab-form-btn flex-div gap-3" @click="searchTourHandler">
        <span>Search Tour</span>
        <img src="~/assets/images/beach-icon.svg" alt="beach-icon" />
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useApiPost } from "../../composables/services/useApi";

interface Country {
  code: string;
  description: {
    content: string;
  };
  states: State[];
}

interface State {
  code: string;
  name: string;
}

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

    const countryList = ref<Country[]>([]);
    const stateList = ref<State[]>([]);

    const filteredCountryList = computed(() =>
      tourObj.value.countryCode.length >= 3
        ? countryList.value.filter((country) =>
            country.description.content.toLowerCase().includes(tourObj.value.countryCode.toLowerCase())
          )
        : []
    );

    const showCountryDropdown = ref(false);
    const showStateDropdown = ref(false);

    const inputHandler = (value: string, inputKey: keyof typeof tourObj.value) => {
      tourObj.value[inputKey] = value;

      if (inputKey === 'countryCode') {
        showCountryDropdown.value = value.length >= 1;
      }
    };

    const selectCountry = (country: Country) => {
      tourObj.value.countryCode = country.description.content;
      showCountryDropdown.value = false;
      fetchStates(country.code);
    };

    const selectState = (state: State) => {
      tourObj.value.stateCode = state.name;
      showStateDropdown.value = false;
    };

    const fetchStates = async (countryCode: string) => {
      try {
        const payload = {
          from: 1,  // Start index
          to: 100   // End index
        };
        const { data } = await useApiPost(`/hotel/countries`, payload);
        const country = data.countries.find((c: Country) => c.code === countryCode);
        if (country && country.states) {
          stateList.value = country.states;
        }
      } catch (error) {
        console.error("Failed to fetch states", error);
      }
    };

    onMounted(async () => {
      try {
        const payload = {
          from: 1,  // Start index
          to: 100   // End index
        };
        const { data } = await useApiPost(`/hotel/countries`, payload);
        countryList.value = data.countries;
      } catch (error) {
        console.error("Failed to fetch countries", error);
      }
    });

    const showStateDropdownOnFocus = () => {
      showStateDropdown.value = true;
    };

    const searchTourHandler = async () => {
      const payload = {
        ...tourObj.value,
      };
      await useApiPost("/flight/search-offer", payload);
    };

    return {
      currentDate: new Date().toLocaleDateString("default", { month: "short", day: "2-digit" }),
      tourObj,
      filteredCountryList,
      stateList,
      showCountryDropdown,
      showStateDropdown,
      inputHandler,
      selectCountry,
      selectState,
      showStateDropdownOnFocus,
      searchTourHandler,
    };
  },
});
</script>
