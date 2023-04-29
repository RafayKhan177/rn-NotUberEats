import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"Delivery"}
        btnColor={"black"}
        textColor={"white"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        btnColor={"white"}
        textColor={"black"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.text)}
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
  >
    <Text style={{ color: props.activeTab === props.text ? "white" : "black" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
