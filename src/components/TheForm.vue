<template>
  <b-container>
    <TheFormHeader />
    <TheFormInputs />
    <TheFormRow v-for="product in products" :key="product.name" :el="product" />
    <TheFormFooter />
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import TheFormHeader from "@/components/TheFormHeader";
import TheFormInputs from "@/components/TheFormInputs";
import TheFormRow from "@/components/TheFormRow";
import TheFormFooter from "@/components/TheFormFooter";

export default {
  name: "TheForm",
  components: { TheFormHeader, TheFormInputs, TheFormRow, TheFormFooter },
  computed: { ...mapState(["products"]) },
};
</script>

<style lang="scss" scoped></style>
