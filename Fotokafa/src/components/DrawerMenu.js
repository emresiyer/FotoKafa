import React,{ Component } from "react";
import {View,Text, ImageBackground} from 'react-native';

import { Input,Avatar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from "react-native-router-flux";


class DrawerMenu extends Component{
    render(){
    return(
        <ImageBackground
        source={require('../foto.png')}
        style={{width: '100%', height: '100%'}}>
               
               <View style={{flex: 0.3}} >
               <Text style={{fontSize:40,alignSelf:'center',marginTop:50,fontStyle:'italic'}}>LOGO</Text>
               </View>
      
           <View style={{flex:0.5,marginLeft:50,marginRight:50}}>
              
                
           
             
                
                <Button  type="outline" buttonStyle={{
                    
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                     marginTop:30
                    }}    title="Giris" 
                    onPress={()=> Actions.Giris()}  >
                </Button>
                <Button  type="outline" buttonStyle={{
                    
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                     marginTop:30
                    }}    title="Kayıt" 
                    onPress={()=> Actions.Kayit()} >
                        
                </Button>
                <Button  type="outline" buttonStyle={{
                     
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                     marginTop:30
                    }}    title="null"  >
                </Button>
                <Button  type="outline" buttonStyle={{
                     
                     borderRadius: 17,
                     marginRight:10,
                     marginLeft:10,
                     borderWidth: 0.5,
                     marginTop:30
                    }}    title="null" 
                    onPress={()=> Actions.Giris()} >
                </Button>
                </View>
                </ImageBackground>
    )
    }
    
}
export default DrawerMenu;
