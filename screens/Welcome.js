import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import ButtonC from "../components/ButtonC";

export default function Welcome({ navigation }) {
  // const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: windowHeight - 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Welcome to
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 45,
            fontWeight: "700",
            color: "#ff8c00",
          }}
        >
          E-Book{" "}
        </Text>
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
          }}
        >
          <ButtonC
            title="Sign In"
            txtColor="white"
            color="green"
            onPress={() => navigation.navigate("SignIn")}
          />
          <Text
            style={{
              marginVertical: 10,
              fontSize: 18,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            OR
          </Text>

          <ButtonC
            title="Sign Up"
            txtColor="white"
            color="blue"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
