<template>
  <div class="passenger-selector">
    <div @click="toggleDropdown" class="dropdown-header">
      {{ totalPassengers }} Passenger{{ totalPassengers !== 1 ? 's' : '' }}
    </div>
    <div v-if="isOpen" class="dropdown-content2">
      <div class="passenger-type">
        <span>Adults</span>
        <div class="counter">
          <button type="button" @click="decrement('adults')" :disabled="passengers.adults <= 1">-</button>
          <span>{{ passengers.adults }}</span>
          <button type="button" @click="increment('adults')">+</button>
        </div>
      </div>
      <div class="passenger-type">
        <span>Children</span>
        <div class="counter">
          <button type="button" @click="decrement('children')" :disabled="passengers.children <= 0">-</button>
          <span>{{ passengers.children }}</span>
          <button type="button" @click="increment('children')">+</button>
        </div>
      </div>
      <div class="passenger-type">
        <span>Infants</span>
        <div class="counter">
          <button type="button" @click="decrement('infants')" :disabled="passengers.infants <= 0">-</button>
          <span>{{ passengers.infants }}</span>
          <button type="button" @click="increment('infants')">+</button>
        </div>
      </div>
      <button @click="closeDropdown" class="done-button">Done</button>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    modelValue: {
      type: Number,
      default: 1
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isOpen: false,
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    }
  },
  computed: {
    totalPassengers() {
      return this.passengers.adults + this.passengers.children + this.passengers.infants
    }
  },
  watch: {
    totalPassengers(newValue) {
      this.$emit('update:modelValue', newValue)
    },
    modelValue: {
      immediate: true,
      handler(newValue) {
        if (newValue !== this.totalPassengers) {
          // Adjust passengers to match the new total
          this.passengers.adults = newValue
          this.passengers.children = 0
          this.passengers.infants = 0
        }
      }
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    closeDropdown() {
      this.isOpen = false
    },
    increment(type) {
      this.passengers[type]++
    },
    decrement(type) {
      if (this.passengers[type] > 0) {
        this.passengers[type]--
      }
    }
  }
}
</script>

<style scoped>
.passenger-selector {
  width: 200px;
  font-family: Arial, sans-serif;
}

.dropdown-header {
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.dropdown-content2 {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
}

.passenger-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.counter {
  display: flex;
  align-items: center;
}

.counter button {
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.counter span {
  margin: 0 10px;
}

.done-button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>