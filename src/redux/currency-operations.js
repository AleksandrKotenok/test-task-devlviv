import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://data.fixer.io/api/";
axios.defaults.params = {
  access_key: "d30b5dc3b8103a70a95b272ab597cffb",
};
export const getCurrency = createAsyncThunk("currency/get", async (base) => {
  try {
    const { data } = await axios.get(`/latest?base=${base}`);
    return data;
  } catch (error) {
    return console.error(error);
  }
});
export const convert = createAsyncThunk("currency/convert", async (from, to, amount) => {
  try {
    const { data } = await axios.post(`/convert?&from=${from}&to${to}&amount${amount}`);
    return data;
  } catch (error) {
    return console.error(error);
  }
});
