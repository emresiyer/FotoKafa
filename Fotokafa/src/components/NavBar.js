import React,{ Component}from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View ,Text,ScrollView, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

/*
if(isOpen == true){
    close()
}else{
    open()
}

------------------------------

(isOpen == true) ? close() : open()
*/

/*
if(isOpen){
    close()
}

------------------------------

isOpen && close()
*/

const NavBar =(props)=>{

        return(
            
            <View style={{backgroundColor:'green', height: 70, width: '100%', flexDirection: 'row', display: 'flex' }}>
                <View style={{ flex: 0.2, }}>
                    {/*Sol Button*/}
                     
                <TouchableOpacity style={{}} onPress={() => {props.leftButtonType ? Actions.drawerOpen(): Actions.pop()}}>
                <Icon style={{marginTop:20,style:'FontAwesome',marginLeft:30,}} name='shopping-bag' size={24} color='white' />
                </TouchableOpacity>

                </View>

                <View style={{ flex: 0.6,}}>
                    {/*orta logo*/} 
        <Text> {props.mytitle} </Text>
            
                </View>

                <View style={{ flex: 0.2 }}>
                   
                               
                
                <TouchableOpacity style={{}} onPress={() => { Actions.CardMenu()}}>
                <Icon style={{marginTop:20,style:'FontAwesome',marginLeft:30,}} name='shopping-bag' size={24} color='white' />
                </TouchableOpacity>

                                     
                                    

                </View>

            </View>
       
    
        )
    }

export default NavBar;