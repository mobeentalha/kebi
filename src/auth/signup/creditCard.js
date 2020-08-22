import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  ImageF,
  ApplePay,
  GiftCard,
  Pay,
  PayPal,
} from "../../../assets/images";
import { Icon, Right } from "native-base";
class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
      paymentMethod: "default",
    };
    this.changePayMethod = this.changePayMethod.bind(this);
  }
  changePayMethod(val) {
    console.log("Value : ", val);
    this.setState({ payementMethod: val });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.form1}>
            <View style={styles.payementView}>
              <View style={styles.payDetailForm}>
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Card Number"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
                <TextInput
                  placeholder="CSV"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Expiry Date"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.customButton}
            onPress={this.props.loginUser}
          >
            <Text style={styles.customButtonText}>CONFIRM</Text>
          </TouchableOpacity>
          <View style={styles.forget}>
            <Text
              style={styles.text1}
              onPress={() => this.props.onScreenChange("SIGN_IN")}
            >
              Have account? SIGN IN!
            </Text>
          </View>
          <View style={styles.logo}>
            <Image source={ImageF} style={styles.logoImage} />
          </View>
        </View>
      </View>
    );
  }
}
export default CreditCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bar: {
    marginTop: "15%",
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
  payementView: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    flexDirection: "column",
  },
  input: {
    borderColor: "#5b82e9",
    color: "#5b82e9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    height: "10%",
    width: "100%",
    marginTop: "5%",
  },
  payDetailForm: {
    width: "100%",
    height: "80%",
  },
  iconViewMain: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#5b82e9",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  iconView: {
    width: "5%",
    height: "20%",
    marginBottom: "5%",
    marginLeft: "5%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "5%",
    width: "60%",
  },
  text1: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "15%",
  },
  textIcon: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  form: {
    width: "100%",
    height: "80%",
    marginTop: "5%",
  },
  form1: {
    width: "100%",
    height: "80%",
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
    height: "10%",
    marginTop: "0%",
    justifyContent: "center",
  },
  logo: {
    backgroundColor: "transparent",
    width: "80%",
    height: "30%",
    marginTop: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "30%",
    height: "50%",
  },
});
