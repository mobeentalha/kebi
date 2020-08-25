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
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-community/picker";
import { BackF, ImageF } from "../../assets/images";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Location extends Component {
  static navigationOptions = {
    drawerLabel: "Location",
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
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../../assets/images/top.jpg")}
            >
              <Text style={styles.HeadingText}> Location </Text>
            </ImageBackground>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.8 }}>
              <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                showsCompass={true}
                rotateEnabled={true}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              ></MapView>
            </View>
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
                style={{ width: "25%", height: "60%", alignSelf: "center" }}
                source={ImageF}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Location;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
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
