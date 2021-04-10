<template>
  <b-row
    class="mt-3 pt-3 form-row--container border-top border-secondary d-flex align-items-center"
  >
    <b-col cols="7">
      <div class="d-flex align-items-center">
        <b-button
          size="sm"
          variant="danger"
          class="form-row-delete-btn"
          @click="deleteEl(el)"
        >
          <b-icon icon="trash-fill" aria-label="Help"></b-icon>
        </b-button>
        <span class="ml-3">{{ el.name }}</span>
      </div>
    </b-col>
    <b-col cols="2">{{ el.price }}</b-col>
    <b-col cols="3" class="d-flex justify-content-end">
      <b-form-checkbox
        class="form-switch-is-paid"
        v-model="el.isPaid"
        name="check-button"
        @input="toggleAndUpdate(el)"
        switch
      ></b-form-checkbox>
      <template v-if="el.isPaid">
        <div class="btn-ticket d-none d-md-flex" size="sm" variant="success">
          <b-icon icon="check" aria-label="Help"></b-icon>
        </div>
      </template>
      <template v-else>
        <div
          class="btn-x d-none d-md-flex"
          size="sm"
          variant="outline-secondary"
        >
          <b-icon icon="x" aria-label="Help"></b-icon>
        </div>
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

<style lang="scss" scoped>
.btn-ticket,
.btn-x {
  padding: 0.5em;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 0.25em;
}

.btn-x {
  border: 2px solid #6c757d;
}

.btn-ticket {
  background-color: #28a745;
  color: #fff;
}
</style>
