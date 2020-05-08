import React,{Component} from 'react';
import {View,Image, ScrollView,Text} from 'react-native';
import {Button} from 'react-native-elements';
const SepettekiUrunler=(data)=>{
    return(
        
        <View style={{flex:1,flexDirection:'row',borderColor: 'green', borderWidth: 1,marginRight:10,marginLeft:10,borderRadius:5}}>
            <View style={{flex:0.3,borderWidth:0,
        borderRadius:2,
        borderColor: '#ddd',
        shadowColor: '#000',
        
        shadowRadius:2,
       
       
        }}>
                {/*fotograf*/}
                <Image style={{ height:100,width:100,marginTop:20,marginLeft:10
        }} source={{uri:'https://source.unsplash.com/1024x768/?nature'}}>

                </Image>
                <Text style={{marginTop:20}}> </Text>
            </View>
            <View style={{flex:0.4,flexDirection:'row'}}>
                     <Button buttonStyle={{backgroundColor:'grey',height:30,marginRight:10,marginTop:50,
                                        marginLeft:30,marginTop:70,borderRadius:3}} title='+' onPress={null}>
                                        </Button>
                    <Text style={{marginTop:75}}>
                        5
                    </Text>
                    <Button buttonStyle={{backgroundColor:'grey',height:30,marginRight:10,marginTop:50,
                                        marginLeft:10,marginTop:70,borderRadius:3}} title='-' onPress={null}>
                                        </Button>
                {/*counter*/}
            </View>
            <View style={{flex:0.3,flexDirection:'row'}}>
                {/*Fiyat ve çıkar*/}
                <Text style={{marginTop:70,marginLeft:20}}>fiyat:</Text>
                <Button buttonStyle={{backgroundColor:'red',height:30,borderRadius:3,marginLeft:21}} title='X' onPress={null}>
                                        </Button>
            </View>
        </View>
        
    )
}
export default SepettekiUrunler;