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
  View,
} from "react-native";
import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import CreditCard from "./Screens/CreditCard";
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
const AppStack = createDrawerNavigator({
  CreditCard: {
    screen: CreditCard,
  },
});
const AuthStack = createStackNavigator(
  { LoginScreen: LoginScreen },
  { SignUpScreen: SignUpScreen },
  { headerMode: false }
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
