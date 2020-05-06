import { Alert } from "react-native";

export default class utils {
  static showAlert(title, message) {
    Alert.alert(title, message, [{ text: "OK" }], { cancelable: false });
  }
}
