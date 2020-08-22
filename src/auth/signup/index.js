import React , {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Step1 from './step1'
import Step2 from './step2'
class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        initialLoading: true,
        paymentMethod: 'PayPal',
        step: '1'
      };
      this.changeStep = this.changeStep.bind(this);
      this.changeStepButton = this.changeStepButton.bind(this);
    }
    changeStep(val){
        this.setState({step: val})
    }
    changeStepButton(){
        this.setState({step: '2'})
    }
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.image}>
                        {this.state.step === '1' && 
                            <View style={styles.bar}>
                                <Text style={styles.HeadingText}> SIGN UP </Text>
                            </View>
                        }
                        {this.state.step === '2' && 
                            <View style={styles.bar}>
                                <Text style={styles.HeadingText}> Payment Method </Text>
                            </View>
                        }
                        {this.state.step === '1' && <Step1 changeStep={this.changeStepButton} /> }
                        {this.state.step === '2' && <Step2 loginUser={this.props.loginUser} /> }
                    </View>
                </View>
        );
    }
}
export default SignUp
const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'white',
  },
  bar: {
        marginTop: '15%',
        backgroundColor: '#2cc8de',
  },
  image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
  },
  HeadingText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
  },
  activeText: {
    color: '#4f93e6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: '5%'
   },
   text: {
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: '5%'
   },
   steps: {
       textAlign: 'center',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',
       width: '100%',
       height: '5%',
       backgroundColor: 'white'
   }
});
