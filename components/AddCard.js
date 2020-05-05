import React, { Component } from "react";
import { View, TextInput } from "react-native";
import ButtonDeck from "./ButtonDeck";

export default class AddCard extends Component {
  render() {
    return (
      <View
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
          />
        </View>
        <View style={{margin: 50, width: '60%'}}>
          <ButtonDeck bgColor={"black"} textColor={"white"} text={"Submit"} />
        </View>
      </View>
    );
  }
}
