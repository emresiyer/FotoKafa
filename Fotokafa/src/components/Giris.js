import React,{Component, } from 'react';
import {View ,Text,ImageBackground,Alert} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Request from './Request';
import Liste from './Liste';


import { Input,Avatar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const email='emresiyer';
const parola='1234';
class Giris extends Component{
    state={Email:'',Password:''};
   
      renderButton(){
        var obj = new Object()
        obj.email=this.state.Email
        obj.password=this.state.Password
        
        Request(obj, this.resHandler);  
        //Actions.Kayit();
        //console.log('stateEmail:'+ this.state.Email);
        //console.log('statePassword:'+ this.state.Password);
      }
      renderButtonGecici(){
        if(email===this.state.Email||parola===this.state.Password)
        {
          Actions.Liste();
        }
         else{
          Alert.alert(
            'Mesaj',
            'Kullanıcı adı veya Şifre hatalı',
            [
                {text:'Tamam',onPress:()=>null}    
            ]
        );
          }
      }

      
      resHandler = (param) => {
        console.log("gelen DATA:  " + JSON.stringify(param.data))
        /*if(param){
          console.log("response olumlu")
        }{
          console.log("İşlem başarısız  ")
        }*/
      }
      

   render(){
    
       return(
       
        <ImageBackground
        source={require('../foto.png')}
        style={{width: '100%', height: '100%'}}>
               
               <View style={{flex: 0.5}} >
               <Text style={{fontSize:40,alignSelf:'center',marginTop:150,fontStyle:'italic'}}>AnaSayfa</Text>
               </View>
      
           <View style={{flex:0.5,marginLeft:50,marginRight:50}} >
              
                
           
                <Input inputStyle={{marginTop:30}}
                        placeholder='Email'
                        value={this.state.Email}
                        onChangeText={EMail => this.setState({Email: EMail})}
                      leftIcon={<Icon style={{marginTop:30,style:'FontAwesome'}} name='user' size={24} color='black' />}
                />
                <Input inputstyle={{marginRight:30}}
                  placeholder='Password'
                  value={this.state.Password}
                      onChangeText={Password=>this.setState({Password})} 
                  leftIcon={<Icon style={{marginTop:1,style:'material'}} name='lock' size ={24} color='black'
       />}/>
                <Button  type="outline" buttonStyle={{
                     marginTop:10,
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                    }}   title="Giriş" onPress={() => this.renderButtonGecici()} >
                </Button>
                <Button  type="outline" buttonStyle={{
                     marginTop:20,
                     borderRadius: 17,
                     marginRight:20,
                     marginLeft:20,
                     borderWidth: 0.5,
                    }}   title="Kayıt" onPress={() => Actions.Kayit()} >
                </Button>
                </View>
                </ImageBackground>
                
       )
   }
}


export default Giris;