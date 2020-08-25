import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-community/picker";
import { BackF, ImageF } from "../../assets/images";

class CreaditCard extends Component {
  static navigationOptions = {
    drawerLabel: "Credit Card",
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={ImageF}
    //     style={[{ height: 20, width: 10 }, { tintColor: "#fff" }]}
    //   />
    // ),
  };
  constructor(props) {
    super(props);
    this.state = {
      country: "uk",
      day: "",
      month: "",
      year: "",
      days: [
        {
          label: `Day`,
          value: `Day`,
        },
      ],
      months: [
        {
          label: `Month`,
          value: `Month`,
        },
      ],
      years: [
        {
          label: `Year`,
          value: `Year`,
        },
      ],
    };
  }
  addDays = () => {
    let temp = [];
    for (let i = 1; i < 32; i++) {
      temp.push({
        label: `${i}`,
        value: `${i}`,
      });
    }
    this.setState({
      days: temp,
    });
  };
  addMonth = () => {
    let temp = [];
    for (let i = 1; i < 13; i++) {
      temp.push({
        label: `${i}`,
        value: `${i}`,
      });
    }
    this.setState({
      months: temp,
    });
  };
  addYear = () => {
    let temp = [];
    for (let i = 1995; i < new Date().getFullYear() + 1; i++) {
      temp.push({
        label: `${i}`,
        value: `${i}`,
      });
    }
    this.setState({
      years: temp,
    });
  };
  componentDidMount() {
    this.addDays();
    this.addMonth();
    this.addYear();
  }

  render() {
    console.log("daysss===============", [...this.state.days]);
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <View style={styles.bar}>
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../../assets/images/top.jpg")}
            >
              <Text style={styles.HeadingText}> Credit Card </Text>
            </ImageBackground>
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  padding: 32,
                  justifyContent: "space-evenly",
                }}
              >
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Card No"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Card Title"
                  placeholderTextColor="#5b82e9"
                  style={styles.input}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TextInput
                    keyboardType="number-pad"
                    // placeholder="Card Title"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    // placeholder="Card Title"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    // placeholder="Card Title"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                </View>
                <View style={{ alignItems: "center", marginTop: "5%" }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2cc8de",
                      paddingVertical: 12,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Bahnschrift-bold",
                        color: "#fff",
                        fontSize: 18,
                      }}
                    >
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "28%", height: "38%", alignSelf: "center" }}
                  source={ImageF}
                />
              </View>
              <View style={{ marginBottom: 100 }} />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
export default CreaditCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    // marginTop: "15%",
    flex: 0.1,
    backgroundColor: "#2cc8de",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // width: "100%",
    // height: "100%",
    // backgroundColor: "white",
    flex: 1,
  },
  HeadingText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: "#5b82e9",
    color: "#5b82e9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    // height: "8%",
    // width: "80%",
    flex: 1,
    marginTop: "5%",
    marginHorizontal: 4,
  },
  activeText: {
    color: "#4f93e6",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: "5%",
  },
  text: {
    color: "#4f93e6",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: "5%",
  },
  steps: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "5%",
    backgroundColor: "white",
  },
  logo: {
    backgroundColor: "transparent",
    width: "80%",
    height: "30%",
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "30%",
    height: "50%",
  },
});
