import React,{Component } from 'react';
import {View ,Text,ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Detay from './Detay';

import { Actions } from 'react-native-router-flux';


import { Input,Avatar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from './NavBar';
class Liste extends Component{
    state={data: []};
    componentWillMount()
    {
        axios.get('https://next.json-generator.com/api/json/get/VJeWZiVsw').then (response => this.setState({ data:response.data.Data})
);
    console.log("data::"+JSON.stringify(this.state.data))   
    }

    

   
    renderData()
    {
        return this.state.data.map((responseData, Id) =>
             <Detay key ={Id} data={responseData}/>
        )
    }
    render (){
        console.log('gelen data '+ this.state);
        console.log('render');
        return(
            <View style={{ flex: 1 }}>
               <NavBar leftButtonType={true}  />
            <ScrollView style={{marginTop: 5}}>
           {
               this.renderData()
           }
        </ScrollView>
        </View>
        )
    }
}
export default Liste;