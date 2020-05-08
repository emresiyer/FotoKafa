import React, { Component } from 'react';
import {View,Image} from 'react-native';
import {ButtonGroup, Button,Text} from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import Detay from './Detay';
//this.props.data
class Icerik extends Component  {
       constructor () {
              super()
              this.state = {
                     images: [
                            'https://source.unsplash.com/1024x768/?nature',
                            'https://source.unsplash.com/1024x768/?water',
                            'https://source.unsplash.com/1024x768/?girl',
                            'https://source.unsplash.com/1024x768/?tree'
                          ],
                selectedIndex: 2
              }
              this.updateIndex = this.updateIndex.bind(this)
            }
            
            updateIndex (selectedIndex) {
              this.setState({selectedIndex})
            }
            
       render(){
              const buttons = ['Açıklama', 'Özellik', 'Kargo Bilgisi']
              const { selectedIndex } = this.state

       return(
        <View style={{flex:1}}>
               <View style={{flex:0.5,borderWidth:0, borderRadius:0,  borderColor: '#ddd',shadowColor: '#000',
                     shadowOffset: { width:5,height :5},backgroundColor:'white'}}>
                     <View style={{flex:0.8}}>
                     <View style={{flex:1}}>
                            <SliderBox slider
                                   sliderBoxHeight={500}
                                   images={this.state.images}
                                   onCurrentImagePressed={index =>
                                   console.warn(`image ${index} pressed`)
                                   } />
                            </View>





                     </View>
                     <View style={{flex:0.2,flexDirection: 'row',display: 'flex',}}>
                            <View style={{flex:0.7}}>
                                   <Text style={{fontSize:25,marginLeft:10,marginTop:10}}>
                                          Ürün Adı
                                   </Text>
                                   
                            </View>
                            <View style={{flex:0.3}}>
                            <Text  style={{fontSize:25,marginTop:10,textShadowRadius:0, 
                                   borderColor: 'green', borderWidth: 1, textAlign: 'center',
                                    marginRight: 10,borderRadius:3}}> Fiyat </Text>
                            </View>
                     </View>
                     
               </View>
               <View style={{flex:0.5,backgroundColor:'white'}}>{/*diğer yarısı*/}
                      <View style={{flex:0.9}}>{/*alttaki buton sabit kalması için  yukarıya değer */}
                            <View style={{flex:1,borderColor: 'green', borderWidth: 1,marginRight:30,marginLeft:30,borderRadius:1,borderTopRightRadius:5,borderTopLeftRadius:5,}}>
                                   <View style={{flex:0.4}}>
                                          <ButtonGroup
                                                 onPress={this.updateIndex}
                                                 selectedIndex={selectedIndex}
                                                 buttons={buttons}
                                                 containerStyle={{backgroundColor:'white',borderRadius:5,flex:1,marginRight:0,marginLeft:-1,marginTop:-1,borderWidth:1,borderColor:'green'}}
                                                 textStyle={{color:'green'}}
                                                 selectedButtonStyle={{backgroundColor:'green'}}
                                          />
                                   </View>
                                   <View>
                                          <Text style={{}}>We believe that this more constrained way to style text will yield better apps:

(Develo. We do not need to have a fontFamily field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.
</Text>
                                   </View>
                            </View>
                            
                      </View>
                       <View>
                             <Button buttonStyle={{backgroundColor:'orange',height:40,marginRight:29,
                                      marginLeft:29,marginTop:2,borderRadius:5}} title='Hemen Başla'>
                                     </Button>
                       </View>
                           

              
               </View>
               
        </View>
        
       )
       }
}
export default Icerik;