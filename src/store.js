/* eslint-disable */
"use strict";

import Vue from "vue";

export const store = Vue.observable({
signUpUser:[],
});

export const mutations = {
change(key, data){
  store[key].pop()
  store[key].push(data)
  }
};
 /* eslint-disable */
