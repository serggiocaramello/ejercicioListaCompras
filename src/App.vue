<template>
  <b-container id="app">
    <TheTitle />
    <TheForm />
  </b-container>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import TheForm from "@/components/TheForm.vue";
export default {
  name: "App",
  components: {
    TheTitle,
    TheForm,
  },
};
</script>

<style lang="scss"></style>
