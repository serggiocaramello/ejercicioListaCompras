<template>
  <b-row class="mt-3 pt-3 border-top border-secondary form-row">
    <b-col cols="7">
      <b-button
        size="sm"
        variant="danger"
        class="mb-2 form-row-delete-btn"
        @click="deleteEl(el)"
      >
        <b-icon icon="trash-fill" aria-label="Help"></b-icon>
      </b-button>
      <span class="ml-3">{{ el.name }}</span>
    </b-col>
    <b-col cols="3">{{ el.price }}</b-col>
    <b-col cols="2" class="d-flex justify-content-end">
      <b-form-checkbox
        class="form-switch-is-paid"
        v-model="el.isPaid"
        name="check-button"
        @input="toggleAndUpdate(el)"
        switch
      ></b-form-checkbox>
      <template v-if="el.isPaid">
        <b-button size="sm" class="mb-2" variant="success">
          <b-icon icon="check" aria-label="Help"></b-icon>
        </b-button>
      </template>
      <template v-else>
        <b-button size="sm" class="mb-2" variant="outline-secondary">
          <b-icon icon="x" aria-label="Help"></b-icon>
        </b-button>
      </template>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheFormRow",
  props: ["el"],
  methods: {
    ...mapActions(["togglePaid", "updateTotal", "deleteProduct"]),
    toggleAndUpdate(el) {
      this.togglePaid(el);
      this.updateTotal(el);
    },
    deleteEl(el) {
      this.deleteProduct(el);
      this.updateTotal(el);
    },
  },
};
</script>

<style lang="scss" scoped></style>
