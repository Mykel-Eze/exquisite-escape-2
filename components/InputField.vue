<template>
    <div class="input-field-div" :class="divClass">
        <label :for="id">{{ label }}</label>
        <input :type="type" :name="id" :id="id" :placeholder="placeholder" :class="inputClass" :value="value">
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        id: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        inputClass: {
            type: String,
            default: ""
        },
        divClass: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
    }
}
</script>

<style>

</style>