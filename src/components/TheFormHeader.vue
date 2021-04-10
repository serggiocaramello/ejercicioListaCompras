<template>
  <b-row class="form-header font-weight-bold">
    <b-col cols="6" md="7">Descripción</b-col>
    <b-col cols="2" md="2">Monto</b-col>
    <b-col cols="4" md="3">¿Cancelado?</b-col>
  </b-row>
</template>

<script>
export default {
  name: "TheFormHeader",
};
</script>

<style lang="scss" scoped>
.form-header {
  font-size: 0.8em;
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
}
</style>
