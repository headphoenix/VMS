import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
// import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen"

import { HomeScreen } from "../../features/home/screens/home.screen";
import { HomeTest } from "../../features/home/screens/homeTest.screen";
import { LevelDetails } from "../../features/home/screens/levelDetails";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Progress } from "../../features/home/screens/progress.screen";

const HomeStack = createSharedElementStackNavigator();


export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
            // ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
            }}>
            <HomeStack.Screen 
              name='HOME'
              component={HomeTest}
            />
            <HomeStack.Screen 
              name='Level'
              component={LevelDetails}
              options={{
                gestureEnabled: true,
                transitionSpec: {
                  open: { animation: 'timing', config: {duration: 300}},
                  close: { animation: 'timing', config: {duration: 300}},
                },
                cardStyleInterpolator: ({current: {progress}}) => {
                  return {
                    cardStyle: {
                      opacity: progress,
                    }
                  }
                }
              }}
            />
            <HomeStack.Screen 
              name='progress'
              component={Progress}
            />
        </HomeStack.Navigator>
    )
}
