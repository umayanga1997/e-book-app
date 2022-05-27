import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import DetailCard from "../components/DetailCard";

export default function BookDetails({ route, navigation }) {
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "white",
          minHeight: windowHeight,
          paddingBottom: 40,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: windowHeight / 2,
            borderRadius: 20,
          }}
          resizeMode="contain"
          source={{
            uri: route.params.cover_img,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            textAlign: "center",
            color: "#ff8c00",
            marginTop: 20,
            textDecorationLine: "underline",
          }}
        >
          {route.params.title}
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <DetailCard title="Category" description={route.params.category} />
          <DetailCard title="Edition" description={route.params.edition} />
          <DetailCard title="Price" description={route.params.price} />
          <DetailCard title="Author" description={route.params.author} />
          <DetailCard
            title="Year of Written"
            description={route.params.year_written}
          />
          <DetailCard
            title="description"
            description={route.params.description}
          />
        </View>
      </View>
    </ScrollView>
  );
}
