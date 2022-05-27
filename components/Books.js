import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Books(props) {
  const windowHeight = Dimensions.get("window").height;

  const [loadigng, setLoading] = useState(true);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setLoading(true);
    filter();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [props]);

  function filter() {
    const any = props.searchValue;
    const cat = props.searchCateory;
    let filterData =
      any == "" && cat == ""
        ? books
        : cat != ""
        ? books.filter((element) =>
            element.category.toLowerCase().includes(cat.toLowerCase())
          )
        : books.filter(
            (element) =>
              element.author.toLowerCase().includes(any.toLowerCase()) ||
              element.category.toLowerCase().includes(any.toLowerCase()) ||
              element.title.toLowerCase().includes(any.toLowerCase())
          );
    setSearchedData(filterData);
  }

  return (
    <ScrollView
      style={{
        padding: 10,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        Books
      </Text>

      {loadigng ? (
        <View
          style={{
            minHeight: windowHeight - 200,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {searchedData.length == 0 ? (
            <View
              style={{
                marginTop: windowHeight / 3,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Data not found!
              </Text>
            </View>
          ) : (
            searchedData.map((book) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={book.id}
                  style={{
                    width: "47%",
                    margin: 6,
                    // borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    props.navigation.push("BookDetails", book);
                  }}
                >
                  <View>
                    <Image
                      style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 10,
                        backfaceVisibility: "hidden",
                      }}
                      resizeMode="cover"
                      source={{ uri: book.cover_img }}
                    ></Image>
                    <Text
                      style={{
                        // marginTop: 5,
                        padding: 5,
                        textAlign: "justify",
                        flexWrap: "wrap",
                        fontSize: 18,
                        //   fontWeight: "700",
                        //   color:'#ff8c00'
                      }}
                    >
                      {book.title}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          marginTop: 3,
                          flexWrap: "wrap",
                          textAlign: "left",
                          fontSize: 14,
                          //   fontWeight: "700",
                          color: "#808080",
                        }}
                      >
                        {book.edition}
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          textAlign: "right",
                          flexWrap: "wrap",
                          fontSize: 16,
                          //   fontWeight: "700",
                          color: "#808080",
                        }}
                      >
                        {"Rs." + book.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      )}
    </ScrollView>
  );
}

const books = [
  {
    id: 1,
    title: "Northanger Abbey",
    author: "Austen, Jane",
    year_written: 1814,
    description: "",
    category: "Romance",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BMjA1ODE4MzAwOF5BMl5BanBnXkFtZTcwNTAyMjE2MQ@@._V1_.jpg",
    edition: "Penguin",
    price: 18.2,
  },
  {
    id: 2,
    title: "War and Peace",
    author: "Tolstoy, Leo",
    year_written: 1865,
    description: "",
    category: "",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BMTUxNzY5MzgwNV5BMl5BanBnXkFtZTgwNDM0NDgxNzE@._V1_.jpg",
    edition: "Penguin",
    price: 12.7,
  },
  {
    id: 3,
    title: "Anna Karenina",
    author: "Tolstoy, Leo",
    year_written: 1875,
    description: "",
    category: "",
    cover_img:
      "https://upload.wikimedia.org/wikipedia/en/7/75/AnnaKarenina2012Poster.jpg",
    edition: "Penguin",
    price: 13.5,
  },
  {
    id: 4,
    title: "Mrs. Dalloway",
    author: "Woolf, Virginia",
    year_written: 1925,
    description: "",
    category: "",
    cover_img:
      "https://images-na.ssl-images-amazon.com/images/I/51TkzBZVj7L._SX331_BO1,204,203,200_.jpg",
    edition: "Harcourt Brace",
    price: 25,
  },
  {
    id: 5,
    title: "The Hours",
    author: "Cunnningham, Michael",
    year_written: 1999,
    description: "",
    category: "",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BMTIwMjQ4MDUxMV5BMl5BanBnXkFtZTYwMjUxMTM3._V1_.jpg",
    edition: "Harcourt Brace",
    price: 12.35,
  },
  {
    id: 6,
    title: "Huckleberry Finn",
    author: "Twain, Mark",
    year_written: 1865,
    description: "",
    category: "",
    cover_img:
      "https://lumiere-a.akamaihd.net/v1/images/p_theadventuresofhuckfinn_20508_8d56bc64.jpeg",
    edition: "Penguin",
    price: 5.76,
  },
  {
    id: 7,
    title: "Bleak House",
    author: "Dickens, Charles",
    year_written: 1870,
    description: "",
    category: "",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BY2ExZDkxM2MtMzBmOS00NWQ4LTk3NGYtM2Y1NzBlM2UzZDFkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    edition: "Random House",
    price: 5.75,
  },
  {
    id: 8,
    title: "Tom Sawyer",
    author: "Twain, Mark",
    year_written: 1862,
    description: "",
    category: "",
    cover_img: "https://m.media-amazon.com/images/I/51ma4mA2+XL.jpg",
    edition: "Random House",
    price: 7.75,
  },
  {
    id: 9,
    title: "A Room of One's Own",
    author: "Woolf, Virginia",
    year_written: 1922,
    description: "",
    category: "",
    cover_img:
      "https://static-01.daraz.lk/p/6b650b35f560c05b818b3b0b4caccb9a.jpg",
    edition: "Penguin",
    price: 29,
  },
  {
    id: 10,
    title: "Harry Potter",
    author: "Rowling, J.K.",
    year_written: 2000,
    description: "",
    category: "",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    edition: "Harcourt Brace",
    price: 19.95,
  },
  {
    id: 11,
    title: "One Hundred Years of Solitude",
    author: "Marquez",
    year_written: 1967,
    description: "",
    category: "",
    cover_img:
      "https://images-na.ssl-images-amazon.com/images/I/71IWwBoDNsL.jpg",
    edition: "Harper  Perennial",
    price: 14.0,
  },
  {
    id: 12,
    title: "Hamlet, Prince of Denmark",
    author: "Shakespeare",
    year_written: 1603,
    description: "",
    category: "",
    cover_img:
      "https://kbimages1-a.akamaihd.net/5fc4252b-1c4f-40ef-9975-22982c94f12c/1200/1200/False/hamlet-prince-of-denmark-23.jpg",
    edition: "Signet  Classics",
    price: 7.95,
  },
  {
    id: 13,
    title: "Lord of the Rings",
    author: "Tolkien, J.R.",
    year_written: 1937,
    description: "",
    category: "",
    cover_img:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    edition: "Penguin",
    price: 27.45,
  },
];
