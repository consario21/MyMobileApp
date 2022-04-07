import {Image,StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function MoreSlider() {
const path_image = '../assets/attachment_91295374.png'
const slides = [
        {
                key: 1,
                title: 'Title 1',
                text: 'Description.\nSay something cool',
                image: require('../assets/room-g45f9e916b_1280.jpg'),
                backgroundColor: '#59b2ab',
        },
        {
                key: 2,
                title: 'Title 2',
                text: 'Other cool stuff',
                image: require('../assets/chairs-gebc018e6b_1280.jpg'),
                backgroundColor: '#febe29',
        },
        {
                key: 3,
                title: 'Rocket guy',
                text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
                image: require('../assets/bleu_gris.jpg'),
                backgroundColor: '#22bcb5',
        }

        ];

        _renderItem = ({ item }) => {
            return (
                <View style={styles.slide}>
                <Image source={item.image} style={{ height : 400, width : "100%" }} />
                </View>
            );
        }

          return <AppIntroSlider renderItem={_renderItem} data={slides}/>;}

const styles = StyleSheet.create({
    header_image : {
        width : "100%",
        height : 300
    }
});
