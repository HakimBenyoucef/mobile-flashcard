import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ButtonDeck extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: "70%",
          height: 50,
          borderColor: "#A2A2A2",
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: this.props.bgColor,
          alignItems: "center",
          justifyContent: "center",
          margin: 10
        }}
      >
        <TouchableOpacity style={{ width: "100%", height: "100%" }}>
          <Text style={{textAlign: "center", fontSize: 20, color: this.props.textColor }}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
