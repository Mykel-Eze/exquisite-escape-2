<template>
  <section id="trip-inspiration">
    <div class="row">
      <div class="container">
        <div class="section-header flex justify-between items-end">
          <div class="section-header-txts">
            <h2 class="section-title">Inspiration for your next trip</h2>
            <p class="section-title-desc">
              Explore our Exquisite packages, easily customised if you feel
              different about the package items — just like customising how fun
              you want your trip to be
            </p>
          </div>
          <button class="customise-package-btn flex-div text-white pry-bg">
            <span>Customise Package</span>
            <img src="~/assets/images/briefcase.svg" alt="briefcase-icon" />
          </button>
        </div>
        <div class="rel">
          <swiper
            :breakpoints="{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }"
            :spaceBetween="30"
            :rewind="true"
            :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(trip, index) in TripList" :key="index">
              <a href="#" class="trip-card">
                <div class="trip-image-div">
                  <img :src="trip.image" alt="Trip Image" class="trip-image" />
                </div>
                <div class="trip-txt-div p-5 pb-[70px]">
                  <h3 class="trip-title">{{ trip.destination }}</h3>
                  <div class="trip-tags">
                    <span
                      v-for="(tag, tagIndex) in trip.tags"
                      :key="tagIndex"
                      class="tag"
                      >{{ tag }}</span
                    >
                  </div>
                  <p class="trip-price">
                    {{ `${trip.currencySymbol}${trip.price.total}` }}
                  </p>
                </div>
              </a>
            </swiper-slide>
          </swiper>

          <!-- Custom navigation icons -->
          <div class="custom-nav-icon custom-prev">
            <img src="~/assets/images/arrow-left.svg" alt="prev" />
          </div>
          <div class="custom-nav-icon custom-next">
            <img src="~/assets/images/arrow-right.svg" alt="next" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  name: "TripInspiration",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const TripList = ref([]);

    onMounted(async () => {
      // const { data } = await $axios.get("flight/flight-inspiration");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position, "POSITION");
      });

      const { data, error } = await useApiPost("/flight/flight-inspiration", {
        origin: "SYD",
      });

      if (data) {
        TripList.value = [...data.value.data];
        TripList.value = TripList.value.map((elem: any) => {
          return {
            ...elem,
            tags: ["Visa", "Flight", "Transfer", "Tour", "Insurance"],
            currencySymbol: "$",
          };
        });
      }
    });

    return {
      modules: [Navigation],
      TripList,
    };
  },
});
</script>

<style scoped src="~/assets/css/trip-inspiration.css"></style>
