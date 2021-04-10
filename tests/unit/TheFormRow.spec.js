import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import store from "@/store/index.js";
import TheForm from "@/components/TheForm";
import TheFormRow from "@/components/TheFormRow";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);

describe("Componente TheFormRow", () => {
  beforeEach(() => {
    store.state.products.push({
      name: "Servicio de prueba",
      price: 500,
      isPaid: false,
    });
  });

  it("Checking if a form-row is generated", () => {
    const wrapper = mount(TheFormRow, {
      store,
      localVue,
      parentComponent: TheForm,
      propsData: { el: store.state.products[0] },
    });

    expect(wrapper.find(".form-row--container").exists()).toBe(true);
  });

  it("Checking products store property when a form-row is deleted", async () => {
    const wrapper = mount(TheFormRow, {
      store,
      localVue,
      parentComponent: TheForm,
      propsData: { el: store.state.products[0] },
    });

    await wrapper.find(".form-row-delete-btn").trigger("click");
    await expect(store.state.products.length).toBe(0);
  });

  it("Checking when isPaid product property changes from false to true and viceversa", async () => {
    const wrapper = mount(TheFormRow, {
      store,
      localVue,
      parentComponent: TheForm,
      propsData: { el: store.state.products[0] },
    });

    await wrapper.find(".form-switch-is-paid input").trigger("click");
    await expect(store.state.products[0].isPaid).toBe(true);
  });
});
