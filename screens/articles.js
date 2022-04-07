import React from 'react'
import {StyleSheet ,Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome , faCompass, faSearch , faComment , faBell} from '@fortawesome/free-solid-svg-icons';
import Articles_Data from '../components/articles_data';
import { ScrollView } from 'react-native-virtualized-view';

export default function Articles() {
        
return (

        <View>

            <View style={{ position : "absolute" , top : 0 , right : 0 , left : 0 , marginTop : 40 , zIndex : 100, flexDirection : "row", paddingHorizontal : 10 , paddingVertical : 4 , marginBottom : 50 , backgroundColor : "silver"}}>
                <View style={{ width : "50%"  }}></View>
                <View style={{ flexDirection : "row" , width : "50%" , justifyContent : "space-between" , alignItems : "center"}}>
                        <Text style={{ position : "relative" , left : -20 }}>
                                    Explore
                        </Text>
                        <Text>
                                    Filter
                        </Text>
                </View>
            </View>

            <ScrollView style = {{ marginBottom : 40 , marginTop : 70}}>
            
                <Articles_Data style = {{ height : 1000 }} />

            </ScrollView>

            <View style={{ position : "absolute" , bottom : 0 , right : 0 , left : 0 , marginBottom : 10}}>
                <View style={{ flexDirection : "row" , justifyContent : "space-between" , alignItems : "center" , paddingHorizontal : 15 }}>

                    <FontAwesomeIcon icon={faHome} style={{ fontSize : 50 }} />
                    <FontAwesomeIcon icon={faCompass} style={{ fontSize : 50 }} />
                    <FontAwesomeIcon icon={faSearch} style={{ fontSize : 50 }} />
                    <FontAwesomeIcon icon={faComment} style={{ fontSize : 50 }} />
                    <FontAwesomeIcon icon={faBell} style={{ fontSize : 50 }} />

                </View>
            </View>

        </View>
        
);
}

const styles = StyleSheet.create({
    
});
