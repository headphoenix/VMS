import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen"

import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import { HomeScreen } from "../../features/home/screens/home.screen";

const SettingsStack = createStackNavigator();


export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
            }}>
            <SettingsStack.Screen 
              name='SettingsScreen'
              component={SettingsScreen}
            />
            {/* <HomeStack.Screen 
              name='RestaurantDetail'
              component={RestaurantDetailScreen}
            /> */}
        </SettingsStack.Navigator>
    )
}
