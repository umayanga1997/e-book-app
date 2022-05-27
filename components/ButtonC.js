import { Text, Pressable } from "react-native";
import React from "react";

export default function ButtonC(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "black" : props.color,
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 20,
        },
      ]}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 20,
          color: props.txtColor,
        }}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}
