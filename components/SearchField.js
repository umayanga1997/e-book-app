import { View, Text, TextInput } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../state/searchAny";

export default function SearchField() {
  const dispatch = useDispatch();

  function searchHandle(value) {
    dispatch(search(value));
  }

  return (
    <View
      style={{
        // flex: 1,
        padding: 10,
      }}
    >
      <TextInput
        style={{
          padding: 5,
          borderColor: "blue",
          borderWidth: 1,
          borderRadius: 20,
          //   backgroundColor: "white",
          paddingLeft: 15,
        }}
        onChangeText={(text) => searchHandle(text)}
        placeholder="Search"
      ></TextInput>
    </View>
  );
}
