<template>
    <div class="input-field-div" :class="divClass">
        <label :for="id">{{ label }}</label>
        <input :type="type" :name="id" :id="id" :placeholder="placeholder" :v-model="id" :class="inputClass" :value="defaultValue">
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
        defaultValue: {
            type: String,
            default: ""
        },
    }
}
</script>

<style>

</style>