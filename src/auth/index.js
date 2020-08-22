import React, {Component} from 'react';
import LoginScreen from './login';
import SignUpScreen from './signup';
class Auth extends Component {
  constructor() {
    super();

    this.state = {
      activeScreen: 'SIGN_IN',
    };
    this.onScreenChange = this.onScreenChange.bind(this);
  }
  onScreenChange(value) {
    this.setState({activeScreen: value});
  }
  render() {
    return (
      <>
        {this.state.activeScreen === 'SIGN_IN' && (
          <LoginScreen onScreenChange={this.onScreenChange} loginUser={this.props.loginUser} />
        )}
        {this.state.activeScreen === 'SIGN_UP' && (
          <SignUpScreen onScreenChange={this.onScreenChange} loginUser={this.props.loginUser} />
        )}
        {/* {this.state.activeScreen === 'FORGET_PASSWORD' && (
          <ForgetPasswordScreen onScreenChange={this.onScreenChange} />
        )} */}
      </>
    );
  }
}
export default Auth;
