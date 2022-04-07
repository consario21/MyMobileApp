import React, {useEffect , useState} from 'react'
import {ScrollView,StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import MoreSlider from '../components/more_slider';


// import your icons

import { faThumbsUp,faCommentDots, faSpinner } from '@fortawesome/free-solid-svg-icons';
  
export default function MoreView({ route, navigation }) {
const path_image = '../assets/attachment_91295374.png'

const params = route.params

const [article, setArticle] = useState('none')
const [articleUser, setArticleUser] = useState('none')
const [isLoading, setIsLoading] = useState(true)

useEffect( async ()  => {

        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        fetch("https://jsonplaceholder.typicode.com/posts/" + params, requestOptions)
        .then(response => response.json())
        .then( async result => {
                setArticle(result)
        })
        .catch(error => console.log('error', error))    
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
          };
          fetch("https://jsonplaceholder.typicode.com/users/" + article.userId, requestOptions)
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
        <View>

                {
                        isLoading ? 
                                <View style={{flexDirection : "row" ,justifyContent : "center" , alignItems : "center", minHeight : 800}}>
                                        <FontAwesomeIcon icon={faSpinner} style= {{color : "silver" , marginRight : 12}} />
                                        <Text style={{ marginRight : 20 }}>
                                                loading 
                                        </Text>
                                </View>
                                :
                                <View>
                                        <View style={ styles.header_image } >
                                        <MoreSlider/>  
                                </View>
                                
                                <View style={{ height : 50 , width : "100%" , position : "relative" , zIndex : 100 }}></View>

                                <ScrollView style={{ marginTop : 400 , position : "relative" , zIndex : 40 }}>
                                        
                                                <View style={styles.row}>
                                                        <View style = {{ paddingHorizontal : 23 }}>
                                                                <Text style={{ fontWeight : "400" , fontSize : 20 , marginHorizontal : 20 , textAlign : "center"  , marginVertical : 20    }}>
                                                                        {article.title}
                                                                </Text>

                                                                <Text style={{  opacity : 0.4  }}>
                                                                        by {articleUser.name}
                                                                </Text>

                                                                <View style={{ marginTop : 25 , flexDirection : "row" }}>
                                                                        <View style={{ borderColor : "gray" , borderWidth : 1 ,  paddingHorizontal : 10 , paddingVertical : 5,  color : "gray" , borderRadius : 5 , flexDirection : "row" , justifyContent : "center" , alignItems : "center" , fontSize : 12}}>
                                                                                <FontAwesomeIcon icon={faThumbsUp} style= {{color : "silver" , marginRight : 12}} />
                                                                                <Text>Like</Text>
                                                                        </View>
                                                                        <View style={{ borderColor : "gray" , borderWidth : 1 ,  paddingHorizontal : 10 , paddingVertical : 5,  color : "gray" , borderRadius : 5 , flexDirection : "row" , justifyContent : "center" , alignItems : "center" , fontSize : 12 , marginLeft : 12}}>
                                                                                <FontAwesomeIcon icon={faCommentDots} style= {{color : "silver" , marginRight : 12}} />
                                                                                <Text>Comment</Text>
                                                                        </View>
                                                                </View>

                                                                <Text style={{ marginVertical : 15 }}> 
                                                                        {article.body}
                                                                </Text>

                                                        </View>
                                                </View>

                                        </ScrollView>
                                </View>
                }

        </View>

);
}

const styles = StyleSheet.create({
    header_image : {
        width : "100%",
        height : 350,
        position : "absolute" ,
         top : 50 , left : 0 , flexDirection : "row",
         zIndex : 60,
    }
});
