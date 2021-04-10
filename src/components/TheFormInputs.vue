<template>
  <div class="my-4">
    <b-row>
      <b-col md="5" class="mb-2 mb-md-0">
        <b-form-input
          class="form-product-name"
          v-model="currProduct.name"
          placeholder="Nombre del producto"
        ></b-form-input>
      </b-col>
      <b-col md="4" class="mb-2 mb-md-0">
        <b-form-input
          class="form-product-price"
          v-model.number="currProduct.price"
          placeholder="Monto"
        ></b-form-input>
      </b-col>
      <b-col md="3">
        <b-button
          class="form-product-add-button px-4"
          variant="success"
          @click="add(currProduct)"
          >Agregar</b-button
        >
      </b-col>
    </b-row>
    <transition name="fade">
      <b-row v-if="error">
        <b-col cols="12">
          <span
            class="mt-2 rounded text-center d-block w-100 p-2 error bg-danger text-white"
            >{{ error }}</span
          >
        </b-col>
      </b-row>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TheFormInputs",
  data() {
    return {
      error: "",
    };
  },
  computed: { ...mapState(["currProduct"]) },
  methods: {
    ...mapActions([
      "addProduct",
      "resetCurrProduct",
      "addPendingPayment",
      "updateTotal",
    ]),
    add(el) {
      if (el.name && el.price) {
        if (typeof el.price === "number") {
          this.addProduct(el);
          this.resetCurrProduct();
          this.addPendingPayment(el);
          this.updateTotal(el);
          this.error = "";
        } else {
          this.error = "El valor del monto debe ser un número.";
        }
      } else {
        this.error = "Por favor complete todos los campos.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-product-add-button {
  @media screen and (min-width: 768px) {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
