// import { StatusBar } from "expo-status-bar";
// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Root } from "native-base";
// import SplashScreen from "./splashScreen";
// import Auth from "./auth";
// import Main from "./main";
// import CreditCard from "./Screens/CreditCard";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       initialLoading: true,
//       user: true,
//     };
//     this.loginUser = this.loginUser.bind(this);
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ initialLoading: false, user: false });
//     }, 3000);
//   }
//   loginUser() {
//     this.setState({ user: false });
//   }
//   render() {
//     return (
//       <Root>
//         {/* <View style={styles.container}>
//           {this.state.initialLoading && <SplashScreen />}
//           {!this.state.initialLoading && this.state.user && (
//             <Auth loginUser={this.loginUser} />
//           )}
//           {!this.state.initialLoading && !this.state.user && <Main />}
//         </View> */}
//         <CreditCard />
//       </Root>
//     );
//   }
// }
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import CreditCard from "./Screens/CreditCard";
import Home from "./Screens/Home";
import ServiceDetails from "./Screens/ServiceDetails";
import Location from "./Screens/Location";

import LoginScreen from "./auth/login";
import SignUpScreen from "./auth/signup";

import SplashScreen from "./splashScreen";
class Splash extends React.Component {
  componentDidMount() {
    this.Auth();
  }

  Auth = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // this.props.navigation.navigate(userToken ? "App" : "Auth");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }
}
// const AppStack = createStackNavigator({ CreditCard: CreditCard });
const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    CreditCard: {
      screen: CreditCard,
    },
    ServiceDetails: {
      screen: ServiceDetails,
    },
    Location: {
      screen: Location,
    },
  },
  {
    contentOptions: {
      activeTintColor: "#2cc8de",
      itemsContainerStyle: { marginVertical: 0 },
      iconContainerStyle: { opacity: 1 },
      style: { backgroundColor: "white" },
      fontFamily: "Bahnschrift-light",
    },
    contentComponent: (props) => (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 120,
            backgroundColor: "white",
            paddingTop: 15,
            borderBottomColor: "rgba(92,94,94,0.5)",
            borderBottomWidth: 0.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Bahnschrift-bold" }}>
            Qasim Khan
          </Text>
        </View>
        <DrawerItems {...props} />
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 5 }}
          onPress={() =>
            Alert.alert(
              "Logout",
              "Do you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Confirm",

                  onPress: () => console.log("logout"),
                },
              ],
              { cancelable: false }
            )
          }
        >
          <View style={{ flex: 0.07 }} />
          {/* <View style={{ flex: 0.25 }}>
            <MaterialCommunityIcons size={25} name="logout" />
          </View> */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: "Bahnschrift-light" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
  }
);
const AuthStack = createStackNavigator(
  { LoginScreen: LoginScreen, SignUpScreen: SignUpScreen },
  {
    headerMode: "none",
    gesturesEnabled: false,
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splash,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Splash",
    }
  )
);
