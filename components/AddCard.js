import React, { Component } from "react";
import { View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import ButtonDeck from "./ButtonDeck";
import { connect } from "react-redux";
import { updateDecks } from "../store/actions/decks";
import utils from "../utils/utils";

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.createCard = this.createCard.bind(this);
  }

  createCard() {
    if (this.isValidInputs()) {
      let card = { question: this.question, answer: this.answer };
      const { deck } = this.props.route.params;
      let decks = this.props.decks;
      deck.cards.push(card);
      decks.map((d) => {
        if (d.name === deck.name) {
          d.cards = deck.cards;
        }
        return d;
      });
      this.props.updateDecks([...decks]);

      this.props.navigation.navigate("Details", { deck: deck })
    } else {
      utils.showAlert("Empty fields", "Please enter a question and an answer");
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
            placeholder={"Answer"}
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
        behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ margin: 50, width: "60%" }}>
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Submit"}
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
