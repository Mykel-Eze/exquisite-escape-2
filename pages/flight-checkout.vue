<template>
    <div class="flight-checkout-page pt-[100px] pb-[80px]">
        <div class="row">
            <div class="container">
                <div class="review-top-side">
                    <div class="top-snack-bar flex-div gap-2 mb-[30px]">
                        <span class="text-white">Secure booking - only takes a few minutes! </span>
                        <img src="@/assets/images/check-circle-2.svg" alt="check-circle" class="right-arr">
                        <span class="text-[#9d9d9d]">Checkout</span>
                    </div>
                    <div class="text-[18px] text-[#606161] mt-[30px]">
                        <h1 class="text-[52px] m-[-2px]">Hello,</h1>
                        <div class="text-[24px]">Who's travelling</div>
                        <div class="mt-[10px] text-[18px]">Traveler names must match government-issued photo ID exactly.
                        </div>
                    </div>
                </div>

                <div class="review-content-side">
                    <div class="ticket-summary-side flex flex-col gap-[20px]">
                        <div class="ticket-summary-block">
                            <vue-tel-input v-model="value"></vue-tel-input>
                        </div>
                    </div>
                    <div class="ticket-price-summary-side"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'

export default {
    name: "FlightCheckoutPage",
    components: {
        VueTelInput
    }
}
</script>

<style>

</style>