<template>
  <b-row class="my-4">
    <b-col cols="7">
      <b-form-input
        class="form-product-name"
        v-model="currProduct.name"
        placeholder="Nombre del producto"
      ></b-form-input>
    </b-col>
    <b-col cols="3">
      <b-form-input
        class="form-product-price"
        v-model.number="currProduct.price"
        placeholder="Precio del producto"
      ></b-form-input>
    </b-col>
    <b-col cols="2">
      <b-button
        class="form-product-add-button px-4"
        variant="success"
        @click="add(currProduct)"
        >Agregar</b-button
      >
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TheFormInputs",
  computed: { ...mapState(["currProduct"]) },
  methods: {
    ...mapActions([
      "addProduct",
      "resetCurrProduct",
      "addPendingPayment",
      "updateTotal",
    ]),
    add(el) {
      this.addProduct(el);
      this.resetCurrProduct();
      this.addPendingPayment(el);
      this.updateTotal(el);
    },
  },
};
</script>

<style lang="scss" scoped></style>
