import React, { Component } from "react";
import { View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import ButtonDeck from "./ButtonDeck";
import { connect } from "react-redux";
import { updateDecks } from "../store/actions/decks";
import utils from "../utils/utils";
import CardApi from "../api/card";
import { Alert } from "react-native";

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.createCard = this.createCard.bind(this);
  }
  //TODO: add quiz id in props
  createCard() {
    if (this.isValidInputs()) {
      const { deck } = this.props.route.params;
      let card = {
        question: this.question,
        answer: this.answer,
        quizId: deck._id,
      };

      CardApi.addCard(card)
        .then((res) => {
          let decks = this.props.decks;
          deck.cards.push(card);
          decks.map((d) => {
            if (d.id === deck.id) {
              d.cards = deck.cards;
            }
            return d;
          });
          this.props.updateDecks([...decks]);

          this.props.navigation.navigate("Details", { deck: deck });
        })
        .catch((err) => Alert.alert("Erreur", err.message));
    } else {
      utils.showAlert(
        "Champ vide",
        "Veuillez écrire une question et une réponse"
      );
    }
  }

  isValidInputs() {
    return (
      this.question && this.question.length && this.answer && this.answer.length
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: 200, alignItems: "center", width: "100%" }}>
          <TextInput
            placeholder={"Question"}
            style={{
              backgroundColor: "#FFF",
              width: "90%",
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              margin: 10,
              borderRadius: 5,
            }}
            onChangeText={(text) => (this.question = text)}
          />
          <TextInput
            placeholder={"Réponse"}
            style={{
              backgroundColor: "#FFF",
              margin: 10,
              width: "90%",
              height: 40,
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 5,
            }}
            onChangeText={(text) => (this.answer = text)}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ margin: 50, width: "60%" }}
        >
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Valider"}
            action={this.createCard}
          />
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
