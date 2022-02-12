import { getCurrency, convert } from "./currency-operations";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const data = createReducer("", {
  [getCurrency.fulfilled]: (_state, { payload }) => payload,
});
const converter = createReducer("", {
  [convert.fulfilled]: (_state, { payload }) => payload,
});
export default combineReducers({
  data,
  converter,
});
