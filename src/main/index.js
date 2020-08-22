import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";
import { Back } from "../../asstes/images";
import SideBar from "../sidebar";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Back} style={styles.image}>
          <View style={styles.bar}>
            <SideBar />
          </View>
          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Icon type="FontAwesome" name="home" style={styles.icon} />
                <Text style={styles.iconText}> Laundary </Text>
              </View>
              <View style={styles.column}>
                <Icon type="FontAwesome" name="home" style={styles.icon} />
                <Text style={styles.iconText}> Lawn Man </Text>
              </View>
              <View style={styles.column}>
                <Icon type="FontAwesome" name="home" style={styles.icon} />
                <Text style={styles.iconText}> Maid </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bar: {
    marginTop: "20%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  HeadingText: {
    color: "#4f93e6",
    fontSize: 50,
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
    height: "70%",
    marginLeft: "5%",
    marginTop: "10%",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  icon: {
    color: "#1be4da",
    fontSize: 80,
    textAlign: "center",
  },
  iconText: {
    color: "#1be4da",
    fontSize: 30,
  },
});
