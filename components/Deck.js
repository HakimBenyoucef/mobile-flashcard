import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import DeckHeader from "./DeckHeader";
import ButtonDeck from "./ButtonDeck";
import { connect } from "react-redux";
import { updateDecks } from "../store/actions/decks";
import utils from "../utils/utils";
import QuizApi from "../api/quiz";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.deck = this.props.route.params.deck;
    this.startQuiz = this.startQuiz.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  startQuiz() {
    if (this.deck.cards.length) {
      this.props.navigation.navigate("Quiz", { deck: this.deck });
    } else {
      utils.showAlert(
        "Quiz vide",
        "Désolé, vous ne pouvez pas faire le Quiz car il n'y aucune carte"
      );
    }
  }

  addCard() {
    this.props.navigation.navigate("Nouvelle carte", { deck: this.deck });
  }

  deleteDeck() {
    Alert.alert(
      "Supprimer le Quiz",
      "Êtes-vous sûr de vouloir supprimer le Quiz?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: () => {
            QuizApi.deleteQuiz(this.deck._id)
              .then((res) => {
                let decks = this.props.decks.filter(
                  (deck) => deck._id !== this.deck._id
                );
                this.props.updateDecks([...decks]);

                this.props.navigation.goBack();
              })
              .catch((error) => Alert.alert("Erreur", error));
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
          {this.props.isAdmin && (
            <ButtonDeck
              bgColor={"white"}
              textColor={"black"}
              text={"Ajouter une carte"}
              action={this.addCard}
            />
          )}

          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Commencer le Quiz"}
            action={this.startQuiz}
          />
          {this.props.isAdmin && (
            <TouchableOpacity onPress={() => this.deleteDeck()}>
              <Text style={{ fontSize: 20, color: "#CD0037", margin: 10 }}>
                Supprimer le Quiz
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
  isAdmin: state.admin.isAdmin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (data) => dispatch(updateDecks(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
