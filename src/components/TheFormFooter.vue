<template>
  <div>
    <b-row class="mt-3 pt-3 border-top border-secondary text-danger">
      <b-col class="text-right" cols="7">Por pagar</b-col>
      <b-col cols="5">{{ pendingPayment }}</b-col>
    </b-row>
    <b-row class="mt-3 pt-3 border-top border-secondary text-success">
      <b-col class="text-right" cols="7">Pagado</b-col>
      <b-col cols="5">{{ paid }}</b-col>
    </b-row>
    <b-row class="mt-3 pt-3 border-top border-secondary text-primary">
      <b-col class="text-right" cols="7">Total</b-col>
      <b-col cols="5">{{ total }}</b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TheFormFooter",
  computed: {
    ...mapState(["pendingPayment", "paid", "total"]),
  },
};
</script>

<style lang="scss" scoped></style>
