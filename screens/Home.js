import {
  View,
  Text,
  atyle,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import BookCategory from "../components/BookCategory";
import SearchField from "../components/SearchField";
import Books from "../components/Books";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const windowHeight = Dimensions.get("window").height;

  const searchValue = useSelector((state) => state.search.value);
  const searchCateory = useSelector((state) => state.searchCategory.value);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        // backgroundColor: "#eee",
      }}
    >
      <View
        style={{
          minHeight: windowHeight,
        }}
      >
        <BookCategory />
        <SearchField />
        <Books
          navigation={navigation}
          searchValue={searchValue}
          searchCateory={searchCateory}
        />
        {/* Floating Btn */}
        <View style={styles.float_btn}>
          <TouchableOpacity>
            <Ionicons
              size={25}
              style={{
                padding: 10,
                color: "white",
                alignSelf: "center",
              }}
              name="menu"
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  float_btn: {
    position: "absolute",
    right: 30,
    top: 160,
    // bottom: 0,
    elevation: 10,
    height: 50,
    width: 50,
    backgroundColor: "#ff8c00",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 100,
  },
});
