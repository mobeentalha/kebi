import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
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
class PaymentOptions extends Component {
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
      <View style={styles.form}>
        <View style={styles.form1}>
          <View style={styles.payementView}>
            <TouchableHighlight
              onPress={() => {
                this.props.changePayMethod(1);
              }}
            >
              <View style={styles.iconViewMain}>
                <View style={styles.iconView1}>
                  <Image source={Pay} style={styles.icon} />
                </View>
                <Text style={styles.text3}> Credit or Debit card </Text>
                <Icon name="ios-arrow-forward" style={styles.textIcon} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.iconViewMain}>
                <View style={styles.iconView2}>
                  <Image source={PayPal} style={styles.icon} />
                </View>
                <Text style={styles.text2}> PayPal </Text>
                <Icon name="ios-arrow-forward" style={styles.textIcon} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.iconViewMain}>
                <View style={styles.iconView}>
                  <Image source={ApplePay} style={styles.icon} />
                </View>
                <Text style={styles.text}> Apple Pay </Text>
                <Icon name="ios-arrow-forward" style={styles.textIcon} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.iconViewMain}>
                <View style={styles.iconView}>
                  <Image source={GiftCard} style={styles.icon} />
                </View>
                <Text style={styles.text}> KEBI Gift Card</Text>
                <Icon name="ios-arrow-forward" style={styles.textIcon} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
export default PaymentOptions;
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
    width: "10%",
    height: "40%",
    marginBottom: "2%",
    marginLeft: "5%",
  },
  iconView1: {
    width: "10%",
    height: "60%",
    marginLeft: "5%",
  },
  iconView2: {
    width: "6%",
    height: "50%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "9%",
    width: "60%",
  },
  text2: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "8%",
    width: "60%",
  },
  text3: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "9%",
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
