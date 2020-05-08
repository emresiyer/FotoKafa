import React from 'react';
    import {Scene,Router, Actions, Stack,Drawer} from 'react-native-router-flux';
import Giris from './Giris';
import Kayit from './Kayit';
import Liste from './Liste';
import { Input,Avatar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardMenu from './CardMenu';
import { Card } from './Card';
import {View} from 'react-native';
import Icerik from './Icerik';
import DrawerMenu from './DrawerMenu';
import Sepetim from './Sepetim';



const RouterComponent=()=>{
    return(
        <Router   navigationBarStyle={{ backgroundColor: 'green' }}>
            <Stack>
            <Drawer hideNavBar

                key="drawerMenu"
                contentComponent={DrawerMenu}
                drawerWidth={250}
                drawerPosition="left"
            >
            <Scene
            onRight={ ()=> Actions.Giris() }
            rightTitle='ileri'
            hideNavBar
              key="Liste" component={Liste} title="Liste Ekrani" titleStyle={{justifyContent:'center',paddingLeft:130}}></Scene>
              </Drawer>
            <Scene   key="Giris" component={Giris} titleStyle={{justifyContent:'center',paddingLeft:130}}></Scene>

            <Scene key="Kayit" component={Kayit} title="Kayit Ekrani" titleStyle={{justifyContent:'center',paddingLeft:130}}></Scene>
            <Scene hideNavBar key="CardMenu" component={CardMenu} title="Card Menu" titleStyle={{justifyContent:'center',paddingLeft:130}}></Scene>
            <Scene key="Icerik" component={Icerik} title="İcerik" titleStyle={{justifyContent:'center',paddingLeft:130}}></Scene>
            <Scene key="Sepetim" component={Sepetim} title="Sepetim" titleStyle={{}}></Scene>

            </Stack>
        </Router>
    )

}
export default RouterComponent;
