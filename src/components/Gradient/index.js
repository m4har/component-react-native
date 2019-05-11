import React from "react";
import { ImageBackground, StatusBar } from "react-native";

const Gradient = ({ children, style }) => (
  <ImageBackground
    source={require("../../assets/img/bg.png")}
    style={style}
    resizeMode="stretch"
  >
    <StatusBar
      translucent={true}
      backgroundColor={"rgba(0,0,0,0)"}
      barStyle="light-content"
    />
    {children}
  </ImageBackground>
);

export default Gradient;
