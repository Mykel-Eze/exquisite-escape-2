<template>
    <div class="select-field rel" :class="divClass">
        <select class="select-inp" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
            <!-- <option value="">{{ label }}</option> -->
            <option v-for="option in options" :value="option.value" :key="option.index">{{ option.label }}</option>
        </select>
        <label>
            {{ label }} <sup v-if="requiredSign" class="required-sign">*</sup>
        </label>
        <SvgIcons icon="caret" />
    </div>
</template>

<script>
import M from "materialize-css";

export default {
    name: 'SelectField',
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
        modelValue: {
            type: String,
            required: true
        },
        requiredSign: {
            type: Boolean,
            default: false
        },
    },
    mounted() {
        const elemsDropdown = document.querySelectorAll('select');
        M.FormSelect.init(elemsDropdown);
    },
    emits: [ 'update:modelValue' ]
}
</script>

<style>

</style>