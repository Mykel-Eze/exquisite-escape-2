<template>
    <div class="radio-field-div" :class="divClass">
        <div class="radio-main-label">
            <span>{{ mainLabel }}</span>
            <sup v-if="requiredSign" class="required-sign">*</sup>
        </div>
        <div class="divClass_2">
            <label v-for="option in options" :key="option.index">
                <input class="with-gap" :name="inputName" type="radio" :value="option.value" :v-model="inputName" />
                <span>{{ option.label }}</span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RadiotField',
        props: {
            options: {
                type: Array,
                required: true
            },
            label: {
                type: String,
                required: false
            },
            divClass: {
                type: String,
                required: false
            },
            divClass_2: {
                type: String,
                required: false
            },
            inputName: {
                type: String,
                required: false
            },
            mainLabel: {
                type: String,
                required: false
            },
            requiredSign: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style></style>