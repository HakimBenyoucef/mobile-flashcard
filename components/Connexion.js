import React, { Component } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import DeckHeader from "./DeckHeader";
import { connect } from "react-redux";
import { KeyboardAvoidingView } from "react-native";
import ButtonDeck from "./ButtonDeck";

class Connexion extends Component {
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
          <TextInput
            placeholder={"Email"}
            ref={(ref) => (this.email = ref)}
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
          <TextInput
            placeholder={"Mot de passe"}
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

          <ButtonDeck
            bgColor={"black"}
            textColor={"white"}
            text={"Connexion"}
            action={this.connect}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, null)(Connexion);
