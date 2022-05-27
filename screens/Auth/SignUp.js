import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import InputText from "../../components/InputText";

export default function SignUp({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            alignSelf: "center",
            marginTop: 100,
            color: "#ff8c00",
          }}
        >
          Sign Up
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 50,
          }}
        >
          <InputText color="blue" title="Enter Your Name" placeholder="Name" />
          <InputText
            color="blue"
            title="Enter Your Mobile Number"
            placeholder="Mobile Number"
          />
          <InputText color="blue" title="Enter Your City" placeholder="City" />
          <InputText
            color="blue"
            title="Enter Email Address"
            placeholder="Email"
          />

          <InputText
            color="blue"
            title="Enter Password"
            placeholder="Password"
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 50,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              backgroundColor: "green",
            }}
            onPress={() => navigation.push("Home")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
