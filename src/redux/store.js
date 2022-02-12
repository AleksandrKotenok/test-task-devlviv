import { configureStore } from "@reduxjs/toolkit";

import currencyReducer from "./currency-reducers";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
