import { SafeAreaView, StatusBar } from "react-native";
import Navigator from "./Navigator";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchReducer from "./state/searchAny";
import searchCategoryReducer from "./state/searchByCategory";
import React from "react";

let store = configureStore({
  reducer: {
    search: searchReducer,
    searchCategory: searchCategoryReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
