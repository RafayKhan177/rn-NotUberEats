import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
const pic =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FFast-food-backgrounds-free-download.jpg&f=1&nofb=1&ipt=e9a8ba83848eca1a21f2c2da763612028ad02f4f9b2e2039654516b2b2c1bd53&ipo=images";
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
    price: "$$",
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
    price: "$$$",
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
    price: "$",
  },
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
    price: "$$",
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
    price: "$$$",
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
    price: "$",
  },
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
    price: "$$",
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
    price: "$$$",
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
    price: "$",
  },
  // Add more restaurants here...
];

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Franciscco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYulp = () => {
    setRestaurantData(localRestaurants);

    // const yulpUrl = ``;
    // const apiOption = {
    //   headers: {
    //     Authorization: `Bearer${YULP_API_KEY}`,
    //   },
    // };
    // return fetch(yulpUrl, apiOption)
    //   .then((res) => rex.json())
    //   .then((json) =>
    //     setRestaurantData(
    //       json.business.filter((business) =>
    //         business.transections.includes(activeTab.toLowerCase())
    //       )
    //     )
    //   );
  };

  useEffect(() => {
    getRestaurantFromYulp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", paddingTop: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurants={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
