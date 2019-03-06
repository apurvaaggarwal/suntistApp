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
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Col, Row, Grid } from "react-native-easy-grid";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

var gender = [{ label: "Male", value: 0 }, { label: "Female", value: 1 }];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "WELCOME",
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

  constructor(props) {
    super(props);
    this.state = {
      text: "Enter your name",
      phoneNumber: "Enter your telephone number",
      gender: "Female"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.navigation.state.params.name}</Text> */}
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={this.state.phoneNumber}
        />
        <RadioForm
          radio_props={gender}
          initial={1}
          onPress={value => {
            this.setState({ gender: value.toString() });
          }}
          formHorizontal={true}
        />
        <Button title="SUBMIT" />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 0.45 }}>Name</Text>
            <Text style={{ flex: 0.35 }}>Tel</Text>
            <Text style={{ flex: 0.2 }}>Sex</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 0.45 }}>{this.state.name}</Text>
            <Text style={{ flex: 0.35 }}>{this.state.phoneNumber}</Text>
            <Text style={{ flex: 0.2 }}>{this.state.gender}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10
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
  },
  textInput: {
    textAlign: "center",
    height: 40,
    borderColor: "red",
    borderBottomWidth: 1
  }
});
