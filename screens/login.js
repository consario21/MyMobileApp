import React, {useEffect , useState} from 'react'
import {ImageBackground,Image,StyleSheet, Text, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import your icons

import { faKey, faUserAlt } from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserAlt,
  faKey
  // more icons go here
);

export default function Login({navigation}) {

const usernameicon = <FontAwesomeIcon icon={faUserAlt} style= {{color : "rgba(240, 195, 0,0.9)" , marginRight : 15}} />
const passwordicon = <FontAwesomeIcon icon={faKey} style= {{color : "rgba(240, 195, 0,0.9)" , marginRight : 15}} />


const [isLoading, setIsLoading] = useState(true)
const [userFound, setuserFound] = useState(false)
const [users, setUsers] = useState("none")
const [username, setUsername] = useState("none")

useEffect( async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    fetch("https://jsonplaceholder.typicode.com/users/", requestOptions)
    .then(response => response.json())
    .then( async result => {

    const userUsername = []
    result.forEach(el => userUsername.push(el.username) )
    setUsers(userUsername)
    
    })
    .catch(error => console.log('error', error))
    .finally(
      () => setIsLoading(false)
  );
},[])

const connexion = () => {
      if(users.includes(username)){
        navigation.navigate("Articles")
      } else {
        {alert("User Not Found")}
      }
}


  return (
    
          <ImageBackground source={require("../assets/black-and-white-19.jpg") } resizeMode="stretch" style={styles.image}>
          
          <View style={styles.form_area}>
              <Image
                style={styles.logo_area}
                source = {require("../assets/attachment_91295374.png")}
              >
              </Image>

              <Text style={{fontSize : 20 , marginVertical : 60 , marginBottom : 30 , color : "white"}}>
                  WELCOME
              </Text>

              <Form style={{marginLeft : "auto" , marginRight : "auto"  , maxWidth : 300 }} onButtonPress={connexion} buttonStyle={{backgroundColor : "rgba(240, 195, 0,0.9)"}} buttonText="SIgn In" >
                  <FormItem style={{minWidth : 200 , maxWidth : 300, backgroundColor : "rgba(0,0,0,0.2)", color : "white"}}  textInputStyle={{color : "white"}} label="USERNAME" labelStyle={{marginBottom: 20, color : "white"}} children={usernameicon} onChangeText = { (value) => setUsername(value) }  />
                  <FormItem style={{minWidth : 200 , maxWidth : 300, backgroundColor : "rgba(0,0,0,0.2)", color : "white"}}  textInputStyle={{color : "white"}} label="PASSWORD" labelStyle={{marginBottom: 20, color : "white"}} children={passwordicon} />
              </Form>

              <Text style={{ marginVertical : 1 , marginBottom : 20 , color : "white"}}>
                  Forgot password ?
              </Text>
          </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo_area :{
      backgroundColor: "white",
      marginVertical : -40,
      width: "25%",
      height : 85,
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius : 100,
      position : "absolute",
      top : 0,
      zIndex : 60,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      
    }
    ,
    logo_area_mn : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width : "100%",
      minHeight : 1000,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    form_area: {
      backgroundColor : "rgba(4, 139, 154,0.9)",
      width : "90%",
      flex : 1,
      justifyContent : "center",
      alignItems : "center",
      borderTopStartRadius : 25,
      borderTopEndRadius : 25,
      borderBottomStartRadius : 25,
      borderBottomEndRadius : 25,
      position : "absolute",
      top : 140,
      zIndex : 50,
    }

});
