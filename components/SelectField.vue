<template>
  <div class="select-field rel" :class="divClass">
    <label>
      {{ label }} <sup v-if="requiredSign" class="required-sign">*</sup>
    </label>
    <select class="select-inp" :value="value" @change="changeHandler">
      <!-- <option value="">{{ label }}</option> -->
      <option v-for="option in options" :value="option[selectKey]" :key="option.index">
        {{ option[selectName] }}
      </option>
    </select>
    <SvgIcons icon="caret" />
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "SelectField",
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    divClass: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      default: "",
      required: false,
    },
    selectKey: {
      type: String,
      default: "value",
    },
    selectName: {
      type: String,
      default: "value",
    },
    requiredSign: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    const elemsDropdown = document.querySelectorAll("select");
    M.FormSelect.init(elemsDropdown);
  },
  // watch: {
  //     // Watch for changes in the 'options' prop and reinitialize Materialize CSS
  //     options: 'initMaterialize',
  // },
  methods: {
    //     initMaterialize() {
    //         // Destroy existing Materialize CSS instances
    //         const elemsDropdown = document.querySelectorAll('select');
    //         M.FormSelect.init(elemsDropdown, { destroy: true });

    //         // Initialize Materialize CSS again
    //         M.FormSelect.init(elemsDropdown);
    //     },
    changeHandler(e) {
      this.$nextTick(() => {
        this.$emit("select", e.target.value);
      });
    },
  },
};
</script>

<style></style>
