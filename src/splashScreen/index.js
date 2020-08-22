import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Root } from "native-base";
import { Logo } from "../../assets/images";
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
    };
  }
  render() {
    return (
      <Root>
        <View style={styles.container}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.text}> Weclomes you! </Text>
        </View>
      </Root>
    );
  }
}
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "20%",
    height: "20%",
  },
  text: {
    color: "#4f93e6",
    fontSize: 20,
    position: "absolute",
    top: "90%",
  },
});
