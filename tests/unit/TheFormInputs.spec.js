import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

import store from "@/store/index.js";
import TheFormInputs from "@/components/TheFormInputs";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Componente TheFormInputs", () => {
  it("Checking state properties default values", () => {
    expect(store.state.currProduct).toEqual({
      name: null,
      price: null,
      isPaid: false,
    });
    expect(store.state.products).toEqual([]);
    expect(store.state.pendingPayment).toEqual(0);
    expect(store.state.paid).toEqual(0);
    expect(store.state.total).toEqual(0);
  });

  it("Checking inputs changes state property currProduct", () => {
    const wrapper = mount(TheFormInputs, { store, localVue });

    wrapper.find(".form-product-name").setValue("Servicio");
    wrapper.find(".form-product-price").setValue(200);
    expect(store.state.currProduct).toEqual({
      name: "Servicio",
      price: 200,
      isPaid: false,
    });
  });

  it("Checking addButton changes state property products", () => {
    const wrapper = mount(TheFormInputs, { store, localVue });

    wrapper.find(".form-product-name").setValue("Servicio");
    wrapper.find(".form-product-price").setValue(200);
    wrapper.find(".form-product-add-button").trigger("click");

    expect(store.state.products.length).toEqual(1);
    expect(store.state.products).toEqual([
      {
        name: "Servicio",
        price: 200,
        isPaid: false,
      },
    ]);
  });

  it("Checking currProduct property after clicking button", () => {
    const wrapper = mount(TheFormInputs, { store, localVue });

    wrapper.find(".form-product-name").setValue("Servicio");
    wrapper.find(".form-product-price").setValue(200);
    wrapper.find(".form-product-add-button").trigger("click");

    expect(store.state.currProduct).toEqual({
      name: null,
      price: null,
      isPaid: false,
    });
  });

  it("Checking products property after clicking button when .form-input-price value is not a number", () => {
    const wrapper = mount(TheFormInputs, { store, localVue });

    wrapper.find(".form-product-name").setValue("Servicio");
    wrapper.find(".form-product-price").setValue("something");
    wrapper.find(".form-product-add-button").trigger("click");

    expect(
      store.state.products.filter((product) => product.isPaid === "something")
        .length
    ).toEqual(0);
  });
});
