import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen"

import { HomeScreen } from "../../features/home/screens/home.screen";

const HomeStack = createStackNavigator();


export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
            }}>
            <HomeStack.Screen 
              name='HOME'
              component={HomeScreen}
            />
            {/* <HomeStack.Screen 
              name='RestaurantDetail'
              component={RestaurantDetailScreen}
            /> */}
        </HomeStack.Navigator>
    )
}
