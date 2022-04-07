import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MoreView from "../screens/moreview";
import Login from "../screens/login";
import Articles from "../screens/articles";

const Stack = createNativeStackNavigator()

export default function Route(){
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown : false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Articles" component={Articles} />
                    <Stack.Screen name="More" component={MoreView} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}