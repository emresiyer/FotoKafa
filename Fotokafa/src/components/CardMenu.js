import React,{ Component}from 'react';
import {Text,View} from 'react-native';
import NavBar from './NavBar';



class CardMenu extends Component{
    render(){
        return(
            <View >
                <NavBar></NavBar>
            </View>
        )
    }
}
export default CardMenu;