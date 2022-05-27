import { TextInput, Text } from "react-native";
import React, { useState } from "react";

export default function InputText(props) {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Text
        style={{
          marginBottom: 5,
          fontSize: 15,
          marginTop: 20,
        }}
      >
        {props.title}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 10,
          borderColor: focused ? props.color : "grey",
          backgroundColor: "white",
          borderWidth: 1,
        }}
      ></TextInput>
    </>
  );
}
