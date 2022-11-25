import React, { useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utility/safe-area.component";

import { SettingsNavigator } from "./settings.navigator";

import { Text } from "react-native";

import { HomeNavigator } from "./home.navigator";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Notifications: "md-notifications-sharp",
  Chat: "md-chatbox-ellipses",
  To_Do: "md-calendar",
  Settings: "md-settings",
};


const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false
  };
};
<Ionicons name="md-notifications-sharp" size={24} color="black" />

export const AppNavigator = () => (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#72BAFC",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Notifications" component={Map} />
      <Tab.Screen name="Chat" component={Map} />
      <Tab.Screen name="To_Do" component={Map} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
);