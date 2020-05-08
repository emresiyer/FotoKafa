import React from 'react';
import {View} from 'react-native';

const Card =(props) =>{
    return(<View style={styles.containerStyle}>
        {props.children}
    </View>);
    
};
const styles ={
    containerStyle:{
        borderWidth:0,
        borderRadius:50,
        borderColor: '',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0,height:2},
        shadowOpacity:0.1,
        shadowRadius:0,
        elevation:50,
        marginLeft:50,
        marginRight: 50,
        marginTop:400
        
    }}
export {Card};