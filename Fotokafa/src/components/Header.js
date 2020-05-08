import React from 'react';
import {Text, View} from 'react-native';
const Header = (props) => {
    const { textStyle,viewStyle}=styles;
    return( <View style={viewStyle}>
                <Text style= {styles.textStyle}>{props.headertext}</Text>
            </View>);
};
export default Header;
const styles={
    textStyle:{
        fontSize: 20

    },
    viewStyle:{
        backgroundColor:'#f8f8f8',
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        shadowOffset:{widht :0 ,height: 2},
        shadowOpacity: 0.5, 
    }
     
};