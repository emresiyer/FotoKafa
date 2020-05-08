import React from 'react';
import {Text,View,Image,Linking,TouchableOpacity} from 'react-native';
import Icerik from './Icerik';
import { Actions } from 'react-native-router-flux';
const Detay =({data})=>
{
    const {containerStyle, subContainerStyle,ImageStyle,titleStyle,linkStyle}=styles;
    return (<TouchableOpacity  onPress={()=> Actions.Icerik(data)}>
        <View style={containerStyle}>
            
           
            
            <View style={subContainerStyle}>
                
                <Image style ={ImageStyle} source={{uri: data.image}} >
 
                </Image>
<Text style={{backgroundColor:'green',position:'absolute',right:0,top:0,padding:10,color:'white'}}>{data.price}</Text>
            </View>
            

          
            <View style={subContainerStyle}>
                <Text style = {titleStyle}>{data.title}</Text>{/* veri gelmiyor*/}
            </View>
        </View>
          </TouchableOpacity>
    );
};
const styles={
    containerStyle: 
    {
        borderWidth:0,
        borderRadius:2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width:0,height :2},
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginTop:40,
    
    },
    
        subContainerStyle: {
            borderBottomWidth:0,
            padding:5,
            backgroundColor:'#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            position:'relative'
        },
        ImageStyle:{
            height:300,
            flex:1,

        },
        titleStyle:{
            fontSize: 24,
        
        },
        linkStyle:{
            height:300,
            flex:1,

        }
    }


export default Detay;       