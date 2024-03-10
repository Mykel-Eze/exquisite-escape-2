<template>
  <div class="filter-blocks-wrapper">
    <!-- Price Filter -->
    <div class="filter-block">
        <div class="filter-block-header">
            <span>Price</span>
            <small class="pry-color clear-btn">Clear</small>
        </div>
        <div id="slider"></div>
        <div class="slider-values flex-div justify-between">
            <span>₦{{formatNumber(minPrice)}}</span>
            <span>₦{{formatNumber(maxPrice)}}</span>
        </div>
    </div>

    <!-- Stops Filter -->
    <div class="filter-block">
        <div class="filter-block-header">
            <span>Stops</span>
            <small class="pry-color clear-btn" @click="clear(selectedStops, stops)">Clear</small>
        </div>
        <div class="filter-list-items">
            <label v-for="(stop, index) in stops" :key="index" :for="stop.item">
                <input type="checkbox" :id="stop.item" v-model="selectedStops" :value="stop.item" class="filled-in">
                <span class="w-full">
                    <span class="flex-div justify-between">
                        <span class="filter-block-item">{{ stop.item }}</span>
                        <span class="filter-block-item-value">₦{{ formatNumber(stop.value) }}</span>
                    </span>
                </span>
            </label>
        </div>
    </div>

    <!-- Airline Filter -->
    <div class="filter-block">
        <div class="filter-block-header">
            <span>Airline</span>
            <small class="pry-color clear-btn" @click="clear(selectedAirlines, airlines)">Clear</small>
        </div>
        <div class="filter-list-items">
            <label v-for="(airline, index) in displayedAirlines" :key="index" :for="airline.name">
                <input type="checkbox" :id="airline.name" v-model="selectedAirlines" :value="airline.name" class="filled-in">
                <span class="w-full">
                    <span class="flex-div justify-between">
                        <span class="filter-block-item">{{ airline.name }}({{ airline.number }})</span>
                        <span class="filter-block-item-value">₦{{ formatNumber(airline.value) }}</span>
                    </span>
                </span>
            </label>
        </div>
        
        <div class="show-more-btn-wrapper mt-[15px]">
            <button v-if="airlines.length > 10" @click="showMore = !showMore" class="flex-div gap-2 bold-txt pry-color text-[14px]">
                {{ showMore ? 'Show Less' : 'Show More' }} 
                <img src="@/assets/images/caret-down-green.svg" alt="caret">
            </button>
        </div>
    </div>

    <!-- Travel & Baggage Filter -->
    <!-- <div class="filter-block">
        <div class="filter-block-header">
            <span>Travel & Baggage</span>
            <small class="pry-color clear-btn" @click="clear(selectedBaggages, stops)">Clear</small>
        </div>
        <div class="filter-list-items">
            <label v-for="(stop, index) in stops" :key="index" :for="stop.item">
                <input type="checkbox" :id="stop.item" v-model="selectedBaggages" :value="stop.item" class="filled-in">
                <span class="w-full">
                    <span class="flex-div justify-between">
                        <span class="filter-block-item">{{ stop.item }}</span>
                        <span class="filter-block-item-value">₦{{ formatNumber(stop.value) }}</span>
                    </span>
                </span>
            </label>
        </div>
    </div> -->

    <!-- Departure Time Filter -->
    <!-- Similar structure as Stops filter -->

    <!-- Arrival Time Filter -->
    <!-- Similar structure as Stops filter -->
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let slider = ref(null);
const minPrice = ref(90000);
const maxPrice = ref(10000000);

const stops = ref([
    {
        item: '0 Stop',
        value: 5000000
    },
    {
        item: '1 Stop',
        value: 5000000
    },
    {
        item: '2+ Stop',
        value: 5000000
    },
]);
const selectedStops = ref([]);

const airlines = ref([
    {
        name: 'Air France',
        number: 12,
        value: 5000000
    },
    {
        name: 'KLM',
        number: 16,
        value: 1000000
    },
    {
        name: 'Air Canada',
        number: 8,
        value: 500000
    },
    {
        name: 'British Air',
        number: 2,
        value: 3000000
    },
    {
        name: 'American A.',
        number: 1,
        value: 500000
    },
    {
        name: 'Delta',
        number: 1,
        value: 5000000
    },
    {
        name: 'Kenya Air',
        number: 12,
        value: 3000000
    },
    {
        name: 'Lufthansa',
        number: 3,
        value: 300000
    },
    {
        name: 'Lufthansa',
        number: 2,
        value: 5000000
    },
    {
        name: 'Qatar Air',
        number: 1,
        value: 5000000
    },
    {
        name: 'Air France',
        number: 12,
        value: 5000000
    },
    {
        name: 'Air France',
        number: 12,
        value: 5000000
    },
]);
const selectedAirlines = ref([]);
const showMore = ref(false);

const displayedAirlines = computed(() => {
  return showMore.value ? airlines.value : airlines.value.slice(0, 10);
});

const clear = (selectedItem, items) => {
  selectedItem.value = [];
  items.value = items.value.map(item => ({ ...item, checked: false }));
};

onMounted(() => {
    slider.value = document.querySelector("#slider");
    let sliderInstance = noUiSlider.create(slider.value, {
        start: [minPrice.value, maxPrice.value],
        connect: true,
        step: 1000,
        range: {
            'min': minPrice.value - 1000,
            'max': maxPrice.value + 100000
        }
    });

    sliderInstance.on('update', (values) => {
      minPrice.value = Number(values[0]);
      maxPrice.value = Number(values[1]);
    });
});

function formatNumber(num) {
  return num.toLocaleString();
}
</script>


<style scoped>
/* Add your CSS styling here */
</style> 
