import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import DeckHeader from "./DeckHeader";
import ButtonDeck from "./ButtonDeck";
import { connect } from "react-redux";
import { updateDecks } from "../store/actions/decks";
import utils from "../utils/utils";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.deck = this.props.route.params.deck;
    this.startQuiz = this.startQuiz.bind(this);
    this.addCard = this.addCard.bind(this);

  }


  startQuiz() {
    if (this.deck.cards.length) {
      this.props.navigation.navigate("Quiz", { deck: this.deck })
    } else {
      utils.showAlert(
        "Quiz vide",
        "Désolé, vous ne pouvez pas faire le quiz car il n'y aucune carte",
      );
    }
  }

  addCard() {
    this.props.navigation.navigate("New Card", { deck: this.deck });
  }

  deleteDeck() {
    Alert.alert(
      "Delete this deck",
      "Are you sure to delete this deck?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            let decks = this.props.decks.filter(
              (deck) => deck.name !== this.deck.name
            );
            this.props.updateDecks([...decks]);

            this.props.navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  }

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
          <ButtonDeck
            bgColor={"white"}
            textColor={"black"}
            text={"Ajouter une carte"}
            action={this.addCard}
          />
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Commencer le Quiz"}
            action={this.startQuiz}
          />
          <TouchableOpacity onPress={() => this.deleteDeck()}>
            <Text style={{ fontSize: 20, color: "#CD0037", margin: 10 }}>
              Supprimer le Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (data) => dispatch(updateDecks(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
