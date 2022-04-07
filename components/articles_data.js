import React, {useEffect , useState} from 'react'
import MyComponent from '../components/componentlog';
import {StyleSheet, FlatList ,Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Articles_Data() {

        const [Articles, setArticles] = useState('none')
        const [isLoading, setIsLoading] = useState(true)
        
        useEffect( async ()  => {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
                };
                fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
                .then(response => response.json())
                .then( async result => {
                    setArticles(result)
                })
                .catch(error => console.log('error', error))    
                .finally(
                    () => setIsLoading(false)
                );

        },[])
        
            
return (
        <View>
            { isLoading ? 
            <View style={{flexDirection : "row" ,justifyContent : "center" , alignItems : "center", minHeight : 800}}>
                    <FontAwesomeIcon icon={faSpinner} style= {{color : "silver" , marginRight : 12}} />
                    <Text style={{ marginRight : 20 }}>
                            loading 
                    </Text>
            </View>
            :
            ( 
            <FlatList
                style={styles.flatliststyle}
                data={Articles}
                renderItem={({ item }) => (
                    <MyComponent  data={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled
            />
            )
        }
        </View>
           
        
);
}

const styles = StyleSheet.create({
    
});
