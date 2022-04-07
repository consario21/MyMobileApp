import React, {useEffect , useState} from 'react'
import { TouchableHighlight ,Image,StyleSheet, Text, View } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from '@react-navigation/native';
// import your icons

import { faCommentDots, faCommentSms } from '@fortawesome/free-solid-svg-icons';
library.add(
    faCommentSms
    // more icons go here
);
  
    export default function MyComponent(props) {
    const path_image = '../assets/chairs-gebc018e6b_1280.jpg'
    const [articleUser, setArticleUser] = useState('none')
    const [isLoading, setIsLoading] = useState(true)

    const navigation = useNavigation(); 

    const data_article = props.data
    
    useEffect( async () => {
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
            fetch("https://jsonplaceholder.typicode.com/users/" + data_article.userId, requestOptions)
            .then(response => response.json())
            .then( async result => {
              setArticleUser(result)
            })
            .catch(error => console.log('error', error))
            .finally(
              () => setIsLoading(false)
          );

    },[])

    return (
              <TouchableHighlight onPress={() => navigation.navigate("More", data_article.id ) } underlayColor="white">
                  <View style={styles.row}>
                      
                      <Image
                        style={styles.article_block_1}
                        source = {require(path_image)}
                      >

                      </Image>
                      
                      <View style={styles.article_block_2}>

                            <Text>{data_article.title}</Text>

                            <Text style={{  opacity : 0.4  }}>
                                    {articleUser.name}
                            </Text>

                            <View style={{ marginTop : 25 , flexDirection : "row" }}>
                                    <Text style={{ backgroundColor : "gray" , paddingHorizontal : 10 , paddingVertical : 5 , color : "white" , borderRadius : 5 , fontSize : 10}}>
                                            LABEL 1
                                    </Text>
                                    <Text style={{ backgroundColor : "gray" , marginLeft : 7 , paddingHorizontal : 10 , paddingVertical : 5 , color : "white" , borderRadius : 5 , fontSize : 10 }}>
                                            LABEL 2
                                    </Text>
                            </View>
                            <View style={{width : "100%" , marginVertical : 12 , flexDirection : "row" , alignItems : "center" }}>
                                    <FontAwesomeIcon icon={faCommentDots} style= {{color : "silver" , marginRight : 12}} />
                                    <Text style={{ opacity : 0.4 }}>0 Comments</Text>
                            </View>
                            
                      </View>
                  </View>
              </TouchableHighlight>
          
  );
}

const styles = StyleSheet.create({
 
  container : {
        width : "100%",
        flex : 1,
  } ,

  row : {
    width : "100%",
    minHeight : 100,
    borderBottomWidth : 1,
    borderBottomColor : "silver",
    flexDirection : "row",
    justifyContent : 'flex-start',
    alignItems : 'flex-start',
    marginVertical : 20,
    paddingHorizontal : "7%",
    paddingBottom : 20
  } ,
  
  article_block_1 : {
        width : '50%',
        alignSelf : "stretch" , 
        height : "auto",
  } , 

  article_block_2 : {
    width : '46%',
    alignSelf : "flex-start", 
    marginLeft : "4%",

  }

});
