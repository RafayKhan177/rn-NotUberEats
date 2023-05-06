import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
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
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", paddingTop: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurants={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
