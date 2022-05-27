import { View, Text } from "react-native";
import React from "react";

export default function DetailCard(props) {
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          color: "green",
          marginTop: 20,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          fontWeight: "700",
        }}
      >
        {props.description != "" ? props.description : "NaN"}
      </Text>
    </View>
  );
}
