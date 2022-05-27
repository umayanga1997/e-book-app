import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../state/searchByCategory";

export default function BookCategory() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Fantasy",
    "Romance",
    "Mystery",
    "Thriller",
    "Horror",
    "Historical",
    "Western",
    "Bildungsroman",
    "Science Fiction",
  ];
  return (
    <>
      <View
        style={{
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Categories
        </Text>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            //   backgroundColor: "black",
            paddingVertical: 15,
          }}
        >
          {categories.map((element) => (
            <View key={element}>
              <Category
                name={element}
                active={activeTab}
                setActive={setActiveTab}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const Category = (props) => {
  const dispatch = useDispatch();

  function searchHandle(value) {
    //
    props.setActive(props.name);
    //
    if (value == "All") dispatch(search(""));
    else dispatch(search(value));
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: props.active === props.name ? "blue" : "green",
        borderRadius: 10,
        marginRight: 5,
      }}
      onPress={() => searchHandle(props.name)}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
