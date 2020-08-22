import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Root} from 'native-base';
import SplashScreen from './splashScreen'
import Auth from './auth'
import Main from './main'
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        initialLoading: true,
        user: true,
      };
      this.loginUser = this.loginUser.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({initialLoading: false});
        }, 3000);
    }
    loginUser(){
        this.setState({user: false})
    }
    render() {
        return (
            <Root>
                <View style={styles.container}>
                    {this.state.initialLoading && <SplashScreen />}
                    {!this.state.initialLoading && this.state.user && <Auth loginUser={this.loginUser} />}
                    {!this.state.initialLoading && !this.state.user && <Main />}
                </View>
            </Root>
        );
    }
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
