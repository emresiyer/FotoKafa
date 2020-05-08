import React from 'react';
import {View} from 'react-native';

const CardSection =(props) =>{
    return(<View style={styles.subContainerStyle}>
        {props.children}
    </View>);
    
};
const styles ={
    
        subContainerStyle:{
            borderBottomWidth:0,
            borderWidth:2,
            borderRadius:50,
          
            
            padding: 5,
            backgroundColor:'red',
            justifyContent:'flex-start',
            flexDirection:'row',
            borderColor:'#ddd',
            positon:'relative'
        }}
export {CardSection};