import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Root } from "native-base";
import { Back, ImageF } from "../../../assets/images";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View source={Back} style={styles.image}>
          <View style={styles.bar}>
            <Text style={styles.HeadingText}> SIGN IN </Text>
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="User Name / Email"
              placeholderTextColor="#5b82e9"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#5b82e9"
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.customButton}
              onPress={this.props.loginUser}
            >
              <Text style={styles.customButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.forget}>
              <Text style={styles.text}> Forget Password</Text>
              <Text
                style={styles.text}
                onPress={() => this.props.onScreenChange("SIGN_UP")}
              >
                Don't have account? SIGN UP
              </Text>
            </View>
            <View style={styles.logo}>
              <Image source={ImageF} style={styles.logoImage} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bar: {
    marginTop: "20%",
    backgroundColor: "#2cc8de",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  HeadingText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    width: "90%",
    height: "80%",
    marginLeft: "5%",
    marginTop: "50%",
    alignItems: "center",
  },
  input: {
    borderColor: "#5b82e9",
    color: "#5b82e9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    height: "5%",
    width: "80%",
    marginTop: "5%",
  },
  customButton: {
    backgroundColor: "#2cc8de",
    marginTop: 20,
    height: "5%",
    borderRadius: 50,
    width: "80%",
    justifyContent: "center",
  },
  customButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  forget: {
    backgroundColor: "transparent",
    width: "80%",
    height: "20%",
    marginTop: "5%",
    justifyContent: "center",
  },
  logo: {
    backgroundColor: "transparent",
    width: "80%",
    height: "15%",
    marginTop: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "30%",
    height: "50%",
  },
});
