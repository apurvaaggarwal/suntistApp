/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "SUNTIST",
    headerStyle: {
      backgroundColor: "#000"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      alignSelf: "center",
      textAlign: "center",
      flex: 1
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const infoRequest = new GraphRequest(
                  "/me?fields=name,picture",
                  null,
                  this._responseInfoCallback
                );
                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
      </View>
    );
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert("Error fetching data: " + error.toString());
    } else {
      //   alert("Result Name: " + result.name);
      this.props.navigation.navigate("Home", {
        name: result.name,
        email: result.email
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
