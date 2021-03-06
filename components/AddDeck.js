import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import ButtonDeck from "./ButtonDeck";
import { connect } from "react-redux";
import { updateDecks } from "../store/actions/decks";
import utils from "../utils/utils";

class AddDeck extends Component {
  constructor(props) {
    super(props);

    this.createDeck = this.createDeck.bind(this);
  }

  createDeck() {
    if (this.isValidInput()) {
      let deck = { name: this.title, cards: [] };
      let decks = this.props.decks ? this.props.decks : [];
      decks.push(deck);
      this.props.updateDecks([...decks]);

      this.props.navigation.navigate("Details", { deck: deck });
      this.clearText();
    } else {
      utils.showAlert("Empty deck title", "Please enter a title for your deck");
    }
  }

  clearText() {
    this.textInput.clear();
    this.title = ""
  }

  isValidInput() {
    return this.title && this.title.length;
  }

  clearDecks() {
    this.props.updateDecks([]);
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: 100, alignItems: "center", width: "100%" }}>
          <Text
            style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
          >
            What is the title of your new deck?
          </Text>
          <TextInput
            placeholder={"Deck title"}
            ref={(ref) => (this.textInput = ref)}
            onChangeText={(text) => (this.title = text)}
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
        <View
          style={{
            width: "60%",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 50,
          }}
        >
          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Create Deck"}
            action={this.createDeck}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
