import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DeckHeader from "./DeckHeader";
import ButtonDeck from "./ButtonDeck";

export default class Deck extends Component {
  render() {
    const { deck } = this.props.route.params;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
          padding: 50,
        }}
      >
        <View style={{ padding: 30 }}>
          <DeckHeader deck={deck} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <ButtonDeck bgColor={"white"} textColor={"black"} text={"Add Card"} />
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Start Quiz"}
          />
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "red", margin: 10 }}>
              Delete Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
