import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DeckHeader from "./DeckHeader";

const DATA = [
  {
    name: "Deck1",
    cards: [1, 2, 3],
  },
  {
    name: "Deck2",
    cards: [4, 5, 6],
  },
  {
    name: "Deck3",
    cards: [7, 8],
  },
];
export default class DeckList extends Component {
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#C2C2C2",
        height: 0.5,
      }}
    />
  );

  render() {
    return (
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) =>
            item.cards && item.cards.length ? (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Details", { deck: item})
                }
              >
                <DeckHeader deck={item} />
              </TouchableOpacity>
            ) : (
              <View>
                <Text>{item.name}</Text>
              </View>
            )
          }
        />
      </View>
    );
  }
}
