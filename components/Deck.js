import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DeckHeader from "./DeckHeader";
import ButtonDeck from "./ButtonDeck";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.startQuiz = this.startQuiz.bind(this);
  }

  startQuiz() {
    const { deck, navigation } = this.props.route.params;
    if (deck.cards.length) {
    } else {
      alert(
        "Sorry, you cannot take a quiz because there are no cards in the deck"
      );
    }
  }

  render() {
    const { deck, navigation } = this.props.route.params;
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
          <ButtonDeck
            bgColor={"white"}
            textColor={"black"}
            text={"Add Card"}
            target={"New Card"}
            navigation={this.props.navigation}
          />
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Start Quiz"}
            action={this.startQuiz}
            navigation={this.props.navigation}
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
