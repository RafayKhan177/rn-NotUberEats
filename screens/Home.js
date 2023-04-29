import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItem";
const pic =
  "https://th.bing.com/th/id/R.7d5b5e5cd55b25e8c62f26d55c299007?rik=LBpCUVZ88Y4WXA&pid=ImgRaw&r=0";
const localRestaurants = [
  {
    name: "Pizza Palace",
    imageUrl: pic,
    categories: ["Italian", "Pizza", "Takeout"],
    reviews: [
      {
        username: "JohnDoe",
        rating: 4.5,
        text: "Best pizza in town!",
      },
      {
        username: "JaneSmith",
        rating: 3.8,
        text: "Decent pizza, but service was slow.",
      },
    ],
    rating: 4.2,
    priceRange: "$$",
  },
  {
    name: "Sushi Spot",
    imageUrl: pic,
    categories: ["Japanese", "Sushi", "Dine-in"],
    reviews: [
      {
        username: "AlexKim",
        rating: 4.8,
        text: "Amazing sushi, great service!",
      },
      {
        username: "EmilyNguyen",
        rating: 4.2,
        text: "Sushi was good, but a bit overpriced.",
      },
    ],
    rating: 4.5,
    priceRange: "$$$",
  },
  {
    name: "Burger Barn",
    imageUrl: pic,
    categories: ["American", "Burgers", "Takeout"],
    reviews: [
      {
        username: "SamuelJohnson",
        rating: 3.5,
        text: "Burgers were mediocre, but fries were great!",
      },
      {
        username: "MiaGarcia",
        rating: 4.0,
        text: "Good burgers, nice atmosphere.",
      },
    ],
    rating: 3.8,
    priceRange: "$",
  },
  // Add more restaurants here...
];

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", paddingTop: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurants={localRestaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
