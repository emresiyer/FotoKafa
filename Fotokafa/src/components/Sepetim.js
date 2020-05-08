import React, { Component } from "react";
import { View,ScrollView,Text,TextInput, Switch } from "react-native";
import NavBar from "./NavBar";
import {ButtonGroup, Button,Input} from 'react-native-elements';
import Sepet from './Sepet';
import TeslimatAdresi from "./TeslimatAdresi";
import Odeme from "./Odeme";
import SiparisGonderildi from "./SiparisGonderildi";
import StepIndicator from 'react-native-step-indicator';

 
class Sepetim extends Component{

    state = {
        currentPosition: 0
        
    }
    
    renderSepet(){

        if(this.state.currentPosition == 0){

            return <Sepet/>
        }else if(this.state.currentPosition == 1) {
            return <TeslimatAdresi/>
        }
        else if(this.state.currentPosition == 2) {
            return <Odeme/>
        }
        else if(this.state.currentPosition == 3) {
            return <SiparisGonderildi/>
        }

       // 

    }
     render(){
        const labels = ["Sepet","Teslimat Adresi","Ödeme","Sipariş Gönderildi"];
         return (
             <View style={{flex:1}}>
                
                 <View style={{flex:0.1}}>
                     <NavBar mytitle={"Sepetim"}/>
                 </View>
                 <View style={{flex:0.9}}>
                    <View style={{flex:0.12,backgroundColor:'grey'}}>
                          <StepIndicator
                          stepCount={4}
                                customStyles={customStyles}
                                currentPosition={this.state.currentPosition}
                                labels={labels}
                             />
                    </View> 
                    <View style={{flex:0.8}}>{/*scrollView alanı */}
                        {this.renderSepet()}
                       
                    </View>
                    <View style={{flex:0.1,flexDirection: 'row', marginTop:20}}>{/* Alt butonlar için*/}
                            <View style={{flex:0.5}}>
                                   <Button buttonStyle={{backgroundColor:'blue',height:40,marginRight:10,
                                        marginLeft:10,marginTop:2,borderRadius:3}} title='Alışverişe Devam Et' onPress={() => this.setState({ currentPosition: (this.state.currentPosition - 1) })}>
                                        </Button>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Button buttonStyle={{backgroundColor:'orange',height:40,marginRight:10,
                                        marginLeft:10,marginTop:2,borderRadius:3}} title='Devam Et' onPress={() => this.setState({ currentPosition: (this.state.currentPosition + 1) })}>
                                        </Button>
                            </View>
                    </View>
                 </View>
             </View>
         );
     };
}
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize:13,
    currentStepLabelColor: '#fe7013'
  }
export default Sepetim;
