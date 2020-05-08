import React,{Component, } from 'react';
import {View ,Text,ImageBackground} from 'react-native';
import axios from 'axios';

import {Actions} from 'react-native-router-flux';
import Request from './Request';

import { Input,Avatar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class Kayit extends Component{
  state={Email:'',Name:'',Password:'',BirthDay:''};
   renderButton(){
     console.log("name:"+this.state.Name);
     console.log("email:"+this.state.Email);
     console.log("Password:"+this.state.Password);
     console.log("Birhday:"+this.state.BirthDay);
     
   /* var obj = new Object()
    obj.name=this.state.Name
    obj.email=this.state.Email
    obj.password=this.state.Password*/
    //console.log("object JSON: " + JSON.stringify(obj))
   // Request(obj);
   }
   render(){
    
       return(
       
        <ImageBackground
        source={require('../foto.png')}
        style={{width: '100%', height: '100%'}}>
               
               <View style={{flex: 0.3}} >
               <Text style={{fontSize:40,alignSelf:'center',marginTop:50,fontStyle:'italic'}}>Kayıt</Text>
               </View>
      
           <View style={{flex:0.5,marginLeft:50,marginRight:50}} >
              
                
           
                <Input inputStyle={{marginTop:10}}
                
                placeholder='Name'
                value={this.state.Name}
                onChangeText={Name =>this.setState({Name})}
                leftIcon={
                    <Icon
                      name='user'
                      size={24}
                      color='black'
                      style='FontAwesome'
                    />
                  }
                />
                <Input inputStyle={{marginTop:10}}
                
                placeholder='Email'
                value={this.state.Email}
                onChangeText={Email=>this.setState({Email})}
                leftIcon={
                    <Icon
                      name='Mail'
                      size={24}
                      color='black'
                      style='FontAwesome'
                    />
                  }
                />
                <Input inputstyle={{marginRight:10}}
                placeholder='Password'
                value={this.state.Password}
                    onChangeText={Password=> this.setState({Password})} 
                leftIcon={{ type: 'password', name: 'chevron-left' }}
                />
                  <Input inputStyle={{marginTop:10}}
                
                placeholder='BirthDay'
                value={this.state.BirthDay}
                onChangeText={BirthDay=>this.setState({BirthDay})}
                leftIcon={
                    <Icon
                      name='Date'
                      size={24}
                      color='black'
                      style='FontAwesome'
                    />
                  }
                />
                <Button  type="outline" buttonStyle={{
                     marginTop:10,
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                     marginTop:40
                    }}    title="Giriş" onPress={this.renderButton()} >
                </Button>
                </View>
                </ImageBackground>
                
       )
   }
}


export default Kayit;