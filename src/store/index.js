import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    currProduct: {
      name: null,
      price: null,
      isPaid: false,
    },
    pendingPayment: 0,
    paid: 0,
    total: 0,
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.products.push(product);
    },
    RESET_CURR_PRODUCT(state) {
      state.currProduct = {
        name: null,
        price: null,
        isPaid: false,
      };
    },
    SET_PENDING_PAYMENT(state, product) {
      state.pendingPayment += product.price;
    },
    TOGGLE_PAID(state, el) {
      let productToPay;
      [productToPay] = state.products.filter(
        (product) => product.name === el.name
      );

      // updating pendingPayment and paid.
      if (productToPay.isPaid) {
        state.pendingPayment -= el.price;
        state.paid += el.price;
      } else {
        state.pendingPayment += el.price;
        state.paid -= el.price;
      }
    },
    UPDATE_TOTAL(state) {
      state.total = state.pendingPayment + state.paid;
    },
    DELETE_PRODUCT(state, el) {
      let productToDelete;
      [productToDelete] = state.products.filter(
        (product) => product.name === el.name
      );
      // updating state.paid or state.pendingPayment
      if (productToDelete.isPaid) {
        state.paid -= el.price;
      } else {
        state.pendingPayment -= el.price;
      }

      // updating state.products
      state.products = state.products.filter(
        (product) => product.name !== el.name
      );
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit("SET_PRODUCT", product);
    },
    resetCurrProduct({ commit }) {
      commit("RESET_CURR_PRODUCT");
    },
    addPendingPayment({ commit }, product) {
      commit("SET_PENDING_PAYMENT", product);
    },
    togglePaid({ commit }, product) {
      commit("TOGGLE_PAID", product);
    },
    updateTotal({ commit }) {
      commit("UPDATE_TOTAL");
    },
    deleteProduct({ commit }, product) {
      commit("DELETE_PRODUCT", product);
    },
  },
  modules: {},
});
