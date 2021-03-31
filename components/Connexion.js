import React, { Component } from "react";
import {
  View,
  TextInput,
  Alert,
  ToastAndroid,
  AlertIOS,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { KeyboardAvoidingView } from "react-native";
import ButtonDeck from "./ButtonDeck";
import UserApi from "../api/user";
import { updateAdmin } from "../store/actions/admin";

class Connexion extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }
  login() {
    try {
      console.log("this.email", this.email);
      console.log("this.email", this.password);
      UserApi.login(this.email, this.password)
        .then((res) => {
          const msg = "Connexion réussie";
          if (Platform.OS === "android") {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
          } else {
            //TODO: handle ios Toast
            // AlertIOS.alert(msg);
          }
          this.props.updateAdmin(true);
          this.props.navigation.navigate("Liste des Quizzes");
          console.log("login response: ", res);
        })
        .catch((error) => {
          console.log("Error: ", error);
          Alert.alert(
            "Identifiants incorrects",
            "Veuillez vérifier vos identifiants"
          );
        });
    } catch (error) {
      console.log("=====> Error:", error);
    }
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
          <TextInput
            placeholder={"Email"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => (this.email = text)}
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
            secureTextEntry={true}
            onChangeText={(text) => (this.password = text)}
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
            action={this.login}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAdmin: (data) => dispatch(updateAdmin(data)),
  };
};

export default connect(null, mapDispatchToProps)(Connexion);
