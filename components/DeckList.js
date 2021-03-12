import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DeckHeader from "./DeckHeader";
import { connect } from "react-redux";

class DeckList extends Component {
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
        {(!this.props.decks || !this.props.decks.length) && (
          <View>
            <View
              style={{
                alignItems: "center",
                padding: 40,
              }}
            >
              <Text style={{ fontSize: 36, textAlign: "center" }}>
                La liste des Quizs est vide
              </Text>
            </View>
          </View>
        )}

        <FlatList
          data={this.props.decks ? this.props.decks : []}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Details", { deck: item })
              }
            >
              <DeckHeader deck={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, null)(DeckList);
