import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import ButtonDeck from "./ButtonDeck";

export default class AddDeck extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: 100, alignItems: "center", width: "100%" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
            What is the title of your new deck?
          </Text>
          <TextInput
            placeholder={"Deck title"}
            style={{
              backgroundColor: "#FFF",
              marginTop: 40,
              width: "90%",
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ margin: 50 }}>
          <ButtonDeck bgColor={"black"} textColor={"white"} text={"Create Deck"} />
        </View>
      </View>
    );
  }
}
