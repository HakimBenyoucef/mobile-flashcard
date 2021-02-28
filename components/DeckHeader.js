import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DeckHeader extends Component {
  render() {
    return (
      <View>
        <View style={{ alignItems: "center", padding: 40 }}>
          <Text style={{ fontSize: 36 }}>{this.props.deck.name}</Text>
          <Text style={{ color: "grey" }}>{this.props.deck.cards.length} cartes</Text>
        </View>
      </View>
    );
  }
}
