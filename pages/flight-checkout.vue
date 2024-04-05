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
                    <form action="#" class="ticket-summary-side flex flex-col gap-[20px]">
                        <div class="ticket-summary-block grid-div-2">
                            <InputField
                                label="First name"
                                divClass="checkout-inp-field-block"
                                id="first-name"
                                inputClass="checkout-inp-field"
                                type="text"
                                placeholder="John"
                                :requiredSign="true"
                            />
                            <InputField
                                label="Middle name"
                                divClass="checkout-inp-field-block"
                                id="middle-name"
                                inputClass="checkout-inp-field"
                                type="text"
                                placeholder="Tom"
                            />
                            <InputField
                                label="Last name"
                                divClass="checkout-inp-field-block"
                                id="last-name"
                                inputClass="checkout-inp-field"
                                type="text"
                                placeholder="Doe"
                                :requiredSign="true"
                            />
                            <RadioField
                                :options="[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                ]"
                                divClass_2="flex-div gap-[20px]"
                                inputName="gender"
                                mainLabel="Gender"
                                :requiredSign="true"
                            />
                        </div>

                        <div class="ticket-summary-block grid-div-2">
                            <div class="tsb-inp-wrapper">
                                <div>
                                    <PhoneNumberField label="Phone number" :requiredSign="true" v_model="phone" />
                                    <span>You will receive text alerts about this trip</span>
                                </div>
                                <div>
                                    <InputField
                                        label="Email"
                                        :requiredSign="true"
                                        type="email"
                                        id="email"
                                        placeholder="johndoe@company.com"
                                        divClass="checkout-inp-field-block"
                                        inputClass="checkout-inp-field"
                                    />
                                    <span>You will receive mail alerts about this trip</span>
                                </div>
                                <DatePickerField
                                    label="Date of birth"
                                    :requiredSign="true"
                                    placeholder="dd/mm/yyyy"
                                    divClass="checkout-inp-field-block"
                                    id="dob"
                                />
                                <SelectField 
                                    :options="[
                                        { value: 'Nigeria Immigration Service', label: 'Nigeria Immigration Service' },
                                        { value: 'US Department of State', label: 'US Department of State' },
                                        { value: 'UK Passport Office', label: 'UK Passport Office' }
                                    ]"
                                    label="Passport issuing authority"
                                    modelValue="passportAuthority"
                                    id="passportAuthority"
                                    :requiredSign="true"
                                />
                                <InputField
                                    label="Passport number"
                                    :requiredSign="true"
                                    type="text"
                                    id="passport-number"
                                    placeholder="Passport number"
                                    divClass="checkout-inp-field-block"
                                    inputClass="checkout-inp-field"
                                />
                                <DatePickerField
                                    label="Passport expiry date"
                                    :requiredSign="true"
                                    placeholder="dd/mm/yyyy"
                                    divClass="checkout-inp-field-block"
                                    id="passport-expiry-date"
                                />
                                <SelectField 
                                    :options="[
                                        { value: 'Nigeria', label: 'Nigeria' },
                                        { value: 'USA', label: 'USA' },
                                        { value: 'UK', label: 'UK' }
                                    ]"
                                    label="Nationality"
                                    modelValue="nationality"
                                    id="nationality"
                                    :requiredSign="true"
                                />
                            </div>
                            <div class="tsb-seats-wrapper">
                                <div class="tsb-seats-title">Your selected seats</div>
                                <div class="flex-div gap-[70px]">
                                    <span>LOS to LHR</span>
                                    <span>Seat 34F</span>
                                </div>
                                <div class="flex-div gap-[70px]">
                                    <span>ATL to YYZ</span>
                                    <span>Seat 16C</span>
                                </div>
                            </div>
                        </div>

                        <div class="ticket-summary-block">
                            <div>Membership Card Number / Promo Code</div>
                            <div class="grid-div-2">
                                <InputField
                                    label="Enter discount promo code"
                                    divClass="checkout-inp-field-block"
                                    id="discount-promo-code"
                                    inputClass="checkout-inp-field"
                                    type="text"
                                    placeholder=""
                                />
                                <InputField
                                    label="Enter corporate code"
                                    divClass="checkout-inp-field-block"
                                    id="corporate-code"
                                    inputClass="checkout-inp-field"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </form>
                    <div class="ticket-price-summary-side"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FlightCheckoutPage",
    data() {
        return {
            phone: ""
        }
    },
    
}
</script>

<style>

</style>