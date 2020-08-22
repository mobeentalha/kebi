import React , {Component} from 'react';
import {Text, View} from 'react-native';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          initialLoading: true,
        };
      }
    render(){
        console.log('props :: ', this.props);
        return(
            <View>
                <Text> Hello </Text>
            </View>
        )
    }
}
export default Menu