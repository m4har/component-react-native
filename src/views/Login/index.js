import React, { PureComponent } from "react";
import { View } from "react-native";

// component
import Gradient from "../../components/Gradient";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

export default class Login extends PureComponent {
  state = {
    loadingLogin: false
  };

  // action button login, ketika tap button login
  // akan muncul loading 5 detik
  actionLogin = () => {
    this.setState({ loadingLogin: true });
    setTimeout(() => {
      this.setState({ loadingLogin: false });
    }, 2000);
  };

  // loading akan hilang ketika tap button back
  actionCLose = () => {
    this.setState({ loadingLogin: false });
  };

  render() {
    return (
      // view container gradient image
      <Gradient style={styles.container}>
        {/* loading indicator, muncul ketika state.loadingLogin true */}
        <Loading
          visible={this.state.loadingLogin}
          onRequestClose={this.actionCLose}
        />
        {/* formInput Username */}
        <FormInput placeholder="Username" />
        {/* formInput Password */}
        <FormInput placeholder="Password" secureTextEntry={true} />
        {/* View container Button */}
        <View style={styles.viewButton}>
          {/* Button Register */}
          <Button style={{ marginRight: 10 }} title="Register" />
          {/* Button Login */}
          <Button
            style={{ marginLeft: 10 }}
            onPress={this.actionLogin}
            title="Login"
          />
        </View>
      </Gradient>
    );
  }
}

// style
const styles = {
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10
  }
};
