import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import {BackF, ImageF} from '../../asstes/images'

class Step1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        initialLoading: true,
        paymentMethod: 'PayPal'
      };
    }
    render() {
        return (
                <View style={styles.container}>
                        <View style={styles.form}>
                            <TextInput placeholder="First Name" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="Last Name" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="City" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="State" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="Zip Code" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="Country" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="Password" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TextInput placeholder="Confirm Password" placeholderTextColor="#5b82e9" style={styles.input} />
                            <TouchableOpacity style={styles.customButton} onPress={this.props.changeStep}>
                                <Text style={styles.customButtonText}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.forget}>
                                <Text 
                                    style={styles.text} 
                                    onPress={() => this.props.onScreenChange('SIGN_IN')}
                                > 
                                    Have account? SIGN IN!
                                </Text>
                            </View>
                            <View style={styles.logo}>
                                <Image source={ImageF} style={styles.logoImage} />
                            </View>
                        </View>
                    </View>
        );
    }
}
export default Step1
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
  text: {
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
    },
  form: {
        width: '90%',
        height: '80%',
        marginLeft: '5%',
        marginTop: '5%',
        alignItems:'center'
  },
  input:{
        borderColor: '#5b82e9',
        color: '#5b82e9',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        height: '5%',
        width: '80%',
        marginTop: '5%'
    },
    selectOption :{
        width: '80%', 
        backgroundColor: 'transparent',
        height: '20%',
        marginTop: '-20%',
        color: '#5b82e9'
    },
    customButton: {
        backgroundColor: '#2cc8de',
        marginTop: 20,
        height: '5%',
        borderRadius: 50,
        width: '80%',
        justifyContent: 'center',
    },
    customButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    forget:{
        backgroundColor: 'transparent',
        width: '80%',
        height: '10%',
        marginTop: '0%',
        justifyContent: 'center'
    },
    logo:{
        backgroundColor: 'transparent',
        width: '80%',
        height: '30%',
        marginTop: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: '30%',
        height: '50%'
    }
});
