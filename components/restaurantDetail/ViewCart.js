import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  // const items = useSelector((state) => state.cartReducer.selectedItems.item);
  // const total = items
  //   .map((item) => Number(item.price.replace("$", "")))
  //   .reduce((prev, curr) => prev + curr, 0);
  // const consttotalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });
  // console.log(consttotalUSD);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items.reduce(
    (acc, item) => acc + Number(item.price.replace("$", "")),
    0
  );
  const totalUSD = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 80,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                // alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
}
