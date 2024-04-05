<template>
  <div class="tickets-overview-wrapper mt-[30px]">
    <div
      class="ticket-overview-block"
      v-for="(ticket, index) in flightArrayList"
      :key="index"
    >
      <div class="left-side">
        <div class="ticket-labels-wrapper flex-div gap-[18px]">
          <div v-if="ticket.topLabels && ticket.topLabels.length !== 0">
            <TicketLabels
              v-for="label in ticket.topLabels"
              :key="label"
              :label="label"
              :daysLeft="ticket.daysLeft"
            />
          </div>
        </div>

        <div class="ticket-overview-content">
          <div class="tc-row-wrapper">
            <div
              class="toc-row flex-div gap-5 w-full"
              v-for="detail in ticket.itineraries"
              :key="detail.airlineName"
            >
              <div class="ticket-airline">
                <img
                  :src="detail.segments[0].operating.carrierCode"
                  :alt="
                    checkDictionaries(
                      detail.segments[0].operating.carrierCode,
                      'carriers'
                    )
                  "
                />
                <span>{{
                  checkDictionaries(
                    detail.segments[0].operating.carrierCode,
                    "carriers"
                  )
                }}</span>
              </div>

              <div class="ticket-from-to flex-div">
                <div class="ticket-from">
                  <div class="ticket-time">
                    {{
                      dateConversionHandler(
                        detail.segments[0].departure.at,
                        "HH:mm"
                      )
                    }}
                  </div>
                  <div class="ticket-state-code">
                    {{ detail.segments[0].departure.iataCode }}
                  </div>
                  <div class="ticket-state">
                    {{
                      checkDictionaries(
                        detail.segments[0].departure.iataCode,
                        "locations"
                      ).cityCode
                    }}
                  </div>
                </div>
                <div class="from-to-divider">
                  <SvgIcons icon="flight_2" />
                  <div>
                    <span>{{ ticket.travelLength }}</span>
                    <span v-if="detail.segments.length - 1 !== 0">{{
                      `∙ ${detail.segments.length - 1} ${
                        detail.segments.length - 1 === 1 ? "stop" : "stops"
                      }`
                    }}</span>
                  </div>
                </div>
                <div class="ticket-to">
                  <div class="ticket-time">
                    {{
                      dateConversionHandler(
                        detail.segments[detail.segments.length - 1].arrival.at,
                        "HH:mm"
                      )
                    }}
                  </div>
                  <div class="ticket-state-code">
                    {{
                      detail.segments[detail.segments.length - 1].arrival
                        .iataCode
                    }}
                  </div>
                  <div class="ticket-state">
                    {{
                      (detail.segments[detail.segments.length - 1].arrival
                        .iataCode,
                      "locations").cityCode
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ticket-labels-wrapper flex-div gap-[10px]">
          <TicketLabels
            v-for="label in ticket.bottomLabels"
            :key="label"
            :label="label"
          />
        </div>
      </div>
      <div class="right-side rel min-h-[200px]">
        <div class="ticket-left-label" v-if="ticket.ticketsLeft < 10">
          <TicketLabels
            label="tickets-left"
            :ticketsLeft="ticket.ticketsLeft"
          />
        </div>

        <div class="ticket-amount-wrapper">
          <div class="ticket-amount">
            {{ `${ticket.price.currency} ${ticket.price.grandTotal}` }}
          </div>

          <div class="view-ticket-btn-wrapper w-full">
            <button
              class="view-ticket-btn flex-div"
              @click="$emit('view-ticket-clicked', ticket)"
            >
              <span>View {{ ticket.numberOfBookableSeats }} ticket(s)</span>
              <img src="@/assets/images/chevy-right.svg" alt="right arrow" />
            </button>
          </div>
        </div>
        <div class="cup-curves up-curve"></div>
        <div class="cup-curves down-curve"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
export default defineComponent({
  props: {
    flightsStopsObj: {
      type: Object,
      default: () => {},
    },
  },
  setup(props: any) {
    const flightArrayList = ref<any>([]);
    const flightDictionary = ref<any>({});
    watch(
      props.flightsStopsObj,
      (newValue) => {
        if (newValue) {
          flightArrayList.value = [...newValue.data];
          flightDictionary.value = { ...newValue.dictionaries };
        }
      },
      { deep: true, immediate: true }
    );
    const checkDictionaries = (fieldValue: string, key: string) => {
      return flightDictionary.value[key][fieldValue];
    };
    const dateConversionHandler = (date: string, formatKey: string) => {
      return dayjs(date).format(formatKey);
    };
    return {
      flightArrayList,
      checkDictionaries,
      dateConversionHandler,
    };
  },
});
</script>
