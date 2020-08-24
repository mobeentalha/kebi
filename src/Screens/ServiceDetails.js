import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-community/picker";
import { BackF, ImageF } from "../../assets/images";

class CreaditCard extends Component {
  static navigationOptions = {
    drawerLabel: "ServiceDetails",
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={ImageF}
    //     style={[{ width: "35%", height: "50%" }, { tintColor: "#fff" }]}
    //   />
    // ),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <View style={styles.bar}>
            <Text style={styles.HeadingText}> Service Details </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView
              style={{ maxHeight: Dimensions.get("screen").height - 280 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    padding: 24,
                    backgroundColor: "#2cc8de",
                    borderRadius: 20,
                  }}
                >
                  <Text>Service 1</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={{ marginBottom: 100 }} /> */}
            </ScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                position: "absolute",
                top: Dimensions.get("screen").height - 300,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Image
                style={{ width: "25%", height: "70%", alignSelf: "center" }}
                source={ImageF}
              />
            </View>
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
    marginTop: "15%",
    backgroundColor: "#2cc8de",
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
    marginTop: "5%",
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
