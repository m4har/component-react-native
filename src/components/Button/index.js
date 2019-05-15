import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, style, title, ...props }) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    style={[styles.container, style]}
  >
    <Text style={styles.textTitle}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1
  },
  textTitle: {
    color: "#fff"
  }
};
