
import React, { Component } from "react";
import { View,ScrollView,Text,TextInput } from "react-native";
import {ButtonGroup, Button,Input} from 'react-native-elements';
import SepettekiUrunler from "./SepettekiUrunler";

const productArray=[ 
    {
        productName: "Polo Kart",
        imageURL: "https://source.unsplash.com/1024x768/?nature",
        productPrice: "75.00 ₺",
        productCount: 1,
    },
    {
        productName: "Magnet Açacak",
        imageURL: "https://source.unsplash.com/1024x768/?nature",
        productPrice: "25.00 ₺",
        productCount: 2,
    },
    {
        productName: "Kare Kartlar",
        imageURL: "https://source.unsplash.com/1024x768/?nature",
        productPrice: "100.00 ₺",
        productCount: 1,
    },
]


renderData = () => {
        
     return productArray.map((obj, id) => {
       <SepettekiUrunler data={obj} /> 
        }
       )
    
}

const Sepet =()=>{
    
    return(
    <ScrollView  style={{flex:1,marginTop:5,}}>
                             <View style={{ borderColor: 'black', borderWidth: 1,marginRight:30,marginLeft:30,borderRadius:1,height:200 }}>
                                
                                  
                                     <ScrollView nestedScrollEnabled={true}>

                                    
      { renderData() }

                                     </ScrollView>
                                     
                               
                             </View>
                             <View style={{ borderColor: 'black', borderWidth: 1,marginRight:30,marginLeft:30,borderRadius:1,height:150, marginTop:20,flexDirection:'column' }}>
                                 <Text style={{fontSize:20,textAlign:'right', marginTop:5,marginRight:10}}>
                                     {"Fiyat: "}
                                 </Text>
                                 <Text style={{fontSize:20,textAlign:'right', marginTop:5,marginRight:10}}>
                                     KDV:
                                 </Text>
                                 <Text style={{fontSize:20,textAlign:'right', marginTop:5,marginRight:10}}>
                                     Kargo:
                                 </Text>
                                 <Text style={{fontSize:20,textAlign:'right', marginTop:5,marginRight:10}}>
                                     Toplam:
                                 </Text>
                             </View>
                             <View style={{ borderColor: 'black', borderWidth: 1,marginRight:30,marginLeft:30,borderRadius:1,height:350,marginTop:20 }}>
                                 <View style={{flex:0.2,flexDirection:'row'}}>
                                                    <View style={{flex:0.6}}>
                                                        <TextInput placeholder='İndirim Kodu' style={{borderWidth:1,marginRight:5,marginLeft:10,borderRadius:1,borderColor:'green',marginTop:10,height:45,borderRadius:5}}></TextInput>
                                                    </View>
                                                <View style={{flex:0.4}}>
                                                <Button buttonStyle={{backgroundColor:'green',height:45,marginRight:30,
                                                        marginLeft:10,marginTop:10,borderRadius:5}} title='Uygula'>
                                                        </Button>
                                                </View>
                                 </View>
                                 <View style={{ flex:0.4}}>
                                     {/*Sipariş not*/}
                                     <TextInput placeholder='Sipariş Notunuz' style={{borderWidth:1,marginRight:30,marginLeft:10,borderRadius:5,borderColor:'green',height:100}}
                                     ></TextInput>
                                 </View>
                                 <View style={{flex:0.4}}>
                                     {/*Hediye notu*/}
                                     <TextInput placeholder='Hediye Notunuz'  style={{borderWidth:1,marginRight:30,marginLeft:10,borderRadius:5,borderColor:'green',height:100}}
                                     ></TextInput>
                                 </View>

                             </View>
                            
                        </ScrollView>
    )
}

export default Sepet;