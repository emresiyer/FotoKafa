import React,{Component} from 'react';
import { Kayit } from "./Kayit";
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {Alert} from 'react-native'; 


const Request =(obj, callback)=>{

 console.log("user"+JSON.stringify(obj));
  const url="http://workplace.codartbilisim.com.tr/Service/User/Validation"
  console.log("istek yapıldı.")
        axios.post(url, {
                    Mail: obj.email,
                    Password: obj.password
        }, {
            auth: {
              username: 'gizem',
              password: 'deneme'
            }
          }).then(obj => {
              if(obj.data.Status===1){
                   callback(true)
              }
              else
              {//console.log("başarısz");
              callback(obj)
                
                Alert.alert(
                    'Mesaj',
                    obj.data.Message,
                    [
                        {text:'Tamam',onPress:()=>null}    
                    ]
                );
              }
            console.log("response: " + JSON.stringify(obj.data));
        })
        
 }

export default Request;