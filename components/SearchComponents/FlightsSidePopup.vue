<template>
  <div>
    <!--===Note-to-Dev: If ticket is more than one, data-ticket-type="multiple". If ticket is just one, data-ticket-type="single"  ===-->
    <div class="side-popup" data-ticket-type="multiple">
      <div class="side-popup-header">
        <div class="flex-div gap-2 mb-4">
          <img
            src="@/assets/images/close-popup.svg"
            alt="close"
            class="close-popup-icon"
            @click="$emit('close-popup')"
          />
          <span>Select fare to london</span>
        </div>

        <div class="amenities-wrapper flex-div gap-[10px]">
          <img src="/icons/qatar.svg" alt="qatar" class="w-[30px]" />
          <span class="text-[16px]">Qatar Airways</span>
          <img
            src="@/assets/images/plug.svg"
            alt="plug"
            class="amenities-icon"
          />
          <img
            src="@/assets/images/wifi.svg"
            alt="wifi"
            class="amenities-icon"
          />
          <img src="@/assets/images/tv.svg" alt="tv" class="amenities-icon" />
          <TicketLabels label="average-co" />
        </div>
      </div>

      <div class="hidden-details-wrapper mb-[30px] mt-[45px]">
        <div
          class="show-hidden-toggle flex-div gap-3 text-[18px] pointer"
          @click="toggleHiddenDetails"
        >
          <span
            >{{ showHiddenDetails ? "Hide details" : "Show details" }}
          </span>
          <img
            src="@/assets/images/caret-down-green.svg"
            alt="caret-down-green"
          />
        </div>

        <div class="hidden-details-wrapper" v-if="showHiddenDetails">
          <div
            v-for="(segment, index) in selectedFlightDetailsObj.itineraries[0]
              .segments"
            :key="index"
          >
            <div class="hidden-details-block mb-4">
              <div class="flex-div gap-[10px]">
                <img
                  src="@/assets/images/flight-icon-2.svg"
                  alt="flight-icon"
                />
                <span>{{
                  `${dateConversionHandler(segment.departure.at, "HH:mm")} - ${
                    checkDictionaries(segment.departure.iataCode, "locations")
                      .cityCode
                  }`
                }}</span>
              </div>
              <div>{{ selectedFlightDetailsObj.airport }}</div>
            </div>
            <ul class="hidden-details-block mb-6">
              <li>{{ `${durationStringHandler(segment.duration)} flight` }}</li>
              <li>
                {{ checkDictionaries(segment.carrierCode, "carriers") }}
              </li>
              <li>
                {{ checkDictionaries(segment.aircraft.code, "aircraft") }}
              </li>
              <li>Economy/Coach (T)</li>
            </ul>
            <div class="hidden-details-block mb-6">
              <div class="flex-div gap-[10px]">
                <img
                  src="@/assets/images/flight-icon-2.svg"
                  alt="flight-icon"
                />
                <span>{{
                  `${dateConversionHandler(segment.arrival.at, "HH:mm")} - ${
                    checkDictionaries(segment.arrival.iataCode, "locations")
                      .cityCode
                  }`
                }}</span>
              </div>
            </div>
            <div
              v-if="
                selectedFlightDetailsObj.itineraries[0].segments.length - 1 !==
                index
              "
              class="layover-row"
            >
              <span>{{
                `Layover: 1h 45m in ${
                  checkDictionaries(segment.arrival.iataCode, "locations")
                    .cityCode
                }`
              }}</span>
            </div>
          </div>

          <!-- <div class="hidden-details-block">
            <div class="flex-div gap-[10px]">
              <img src="@/assets/images/flight-icon-2.svg" alt="flight-icon" />
              <span>7:00am - Istanbul</span>
            </div>
            <div>Istanbul Airport (IST)</div>
          </div>

          <ul class="hidden-details-block">
            <li>3h 40m flight</li>
            <li>Turkish Airlines 626</li>
            <li>Airbus A330-300</li>
            <li>Economy/Coach (T)</li>
          </ul>

          <div class="hidden-details-block">
            <div class="flex-div gap-[10px]">
              <img src="@/assets/images/flight-icon-2.svg" alt="flight-icon" />
              <span>9:40am - Paris</span>
            </div>
            <div>Roissy - Charles de Gaulle (CDG)</div>
          </div> -->

          <div class="hidden-details-block flex flex-col gap-[10px] mt-[20px]">
            <div class="flex-div gap-[10px]">
              <img src="@/assets/images/plug.svg" alt="plug" />
              <span>In-seat power outlet</span>
            </div>
            <div class="flex-div gap-[10px]">
              <img src="@/assets/images/wifi.svg" alt="wifi" />
              <span>Wi-Fi</span>
            </div>
            <div class="flex-div gap-[10px]">
              <img src="@/assets/images/tv.svg" alt="tv" />
              <span>In-flight entertainment</span>
            </div>
            <div class="flex-div">
              <TicketLabels label="average-co" />
            </div>
          </div>
        </div>
      </div>

      <div class="tickets-wrapper">
        <div
          class="tickets-block"
          v-for="(pricing, index) in selectedFlightDetailsObj.travelerPricings"
          :key="index"
        >
          <div class="tickets-top-side">
            <div class="ticket-amount-div">
              <h2 class="m-0">
                {{ `${pricing.price.currency} ${pricing.price.total}` }}
              </h2>
              <span>{{
                `${pricing.price.total} ${
                  selectedFlightDetailsObj.oneway ? "one-way" : "round-trip"
                } for 1 traveler`
              }}</span>
            </div>
            <div class="ticket-items-wrapper">
              <div class="ticket-item">
                <div class="ticket-item-title">Economy Lightbag</div>
                <div class="ticket-item-content flex-div">
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Cabin:</span> Economy
                  </div>
                </div>
              </div>
              <div class="ticket-item">
                <div class="ticket-item-title">Seat</div>
                <div class="ticket-item-content flex-div gap-[10px]">
                  <img
                    src="@/assets/images/seat.svg"
                    alt="seat"
                    class="ticket-item-icon w-[18px]"
                  />
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Seat choice ∙ </span> Extra fee
                  </div>
                </div>
              </div>
              <div class="ticket-item">
                <div class="ticket-item-title">Bags</div>
                <div class="ticket-item-content flex-div gap-[10px]">
                  <img
                    src="@/assets/images/arrow-right-green.svg"
                    alt="arror"
                    class="ticket-item-icon w-[24px]"
                  />
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Carry-on bags included</span>
                  </div>
                </div>
                <div class="ticket-item-content flex-div gap-[10px]">
                  <img
                    src="@/assets/images/arrow-right-green.svg"
                    alt="arror"
                    class="ticket-item-icon w-[24px]"
                  />
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Carry-on bags included</span>
                  </div>
                </div>
                <div class="ticket-item-content">
                  <div class="text-[#606161] text-[14px]">
                    <div class="my-[5px]">
                      <sup>*</sup>Carry-on bag included for up to
                      <span class="text-[#9D9D9D]">26lbs</span>
                    </div>
                    <div>
                      <sup>**</sup>Checked bag included for up to
                      <span class="text-[#9D9D9D]">50 lbs each</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ticket-item">
                <div class="ticket-item-title">Flexibility</div>
                <div class="ticket-item-content flex-div gap-[10px]">
                  <img
                    src="@/assets/images/close-popup.svg"
                    alt="close"
                    class="ticket-item-icon w-[24px]"
                  />
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Funding money ∙ </span> Extra
                    fee
                  </div>
                </div>
                <div class="ticket-item-content flex-div gap-[10px]">
                  <img
                    src="@/assets/images/recycle.svg"
                    alt="recycle"
                    class="ticket-item-icon w-[24px]"
                  />
                  <div class="flex-div gap-[10px] text-[#9D9D9D]">
                    <span class="text-[#606161]">Making changes ∙ </span> Extra
                    fee
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tickets-bottom-side">
            <div class="price-change-protection flex-div gap-[10px]">
              <img
                src="@/assets/images/price-change.svg"
                alt="price-change"
                class="price-change-icon"
              />
              <span>Price change protection </span>
              <img
                src="@/assets/images/i-caution.svg"
                alt=""
                class="i-caution-icon"
              />
            </div>
            <div class="text-[14px] text-[#848484]">
              We will refund the difdifference if the price drops before you
              fly.
            </div>
            <div class="flex-div justify-between">
              <label class="text-[14px] text-[#141414]">
                <input type="checkbox" class="filled-in" />
                <span>Add to this flight</span>
              </label>
              <span>₦50,000</span>
            </div>

            <div class="select-ticket-btn-wrapper mt-5">
              <button
                class="select-ticket-btn"
                @click="selectTicketHandler(pricing)"
              >
                Select ticket
              </button>
            </div>

            <div class="cup-curves left-curve"></div>
            <div class="cup-curves right-curve"></div>
          </div>
        </div>
      </div>

      <div class="side-popup-footer text-[10px]">
        <div class="spf-note-1 my-[10px]">
          Baggage fees reflect the airline's standard fees based on the selected
          fare class. Fees may vary based on size and weight restrictions as
          well as loyalty programs and other promotions. For more information,
          check with
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="pry-color underline"
            >Qatar Airways ↗</a
          >. You can purchase checked bags from
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="pry-color underline"
            >Qatar Airways ↗</a
          >
          or through the link in your confirmation or check-in emails.
        </div>

        <div class="spf-note-2 flex-div">
          <img src="@/assets/images/leaf.svg" alt="leave" class="leaf-icon" />
          <span>
            Visit the
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="pry-color underline"
              >Qatar Airways ↗</a
            >
            website to find out more about their sustainability initiatives.
          </span>
        </div>
      </div>
    </div>
    <div class="side-popup-overlay" @click="$emit('close-popup')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import dayjs from "dayjs";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FlightSidePopup",
  props: {
    selectedFlightObj: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const showHiddenDetails = ref(false);
    const selectedFlightDetailsObj = ref({});
    const flightDictionaries = ref({});
    const router = useRouter();

    watch(
      props.selectedFlightObj,
      (newValue) => {
        if (newValue) {
          selectedFlightDetailsObj.value = { ...newValue.selectedFlight };
          flightDictionaries.value = { ...newValue.flightDictionaries };
        }
      },
      { deep: true, immediate: true }
    );

    const toggleHiddenDetails = () => {
      showHiddenDetails.value = !showHiddenDetails.value;
    };
    const checkDictionaries = (fieldValue: string, key: string) => {
      return flightDictionaries.value[key][fieldValue];
    };
    const dateConversionHandler = (date: string, formatKey: string) => {
      return dayjs(date).format(formatKey);
    };
    const durationStringHandler = (duration: string) => {
      const newStr = duration.replace("PT", "");
      return newStr;
    };
    const selectTicketHandler = (selectedPrice: any) => {
      sessionStorage.setItem("selectedPrice", selectedPrice);
      router.push("/flight-ticket-review");
    };
    return {
      showHiddenDetails,
      selectedFlightDetailsObj,
      toggleHiddenDetails,
      checkDictionaries,
      dateConversionHandler,
      durationStringHandler,
      selectTicketHandler,
    };
  },
});
</script>

<style></style>
