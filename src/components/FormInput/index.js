import React from "react";
import { TextInput, View } from "react-native";

const FormInput = ({ secureTextEntry, ...props }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  </View>
);
const styles = {
  container: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    margin: 5
  },
  textInput: {
    color: "#fff",
    height: 50
  }
};

export default FormInput;
