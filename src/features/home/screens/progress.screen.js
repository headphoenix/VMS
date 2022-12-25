import React, { useContext, useState,  useRef } from "react";
import { FlatList, TouchableOpacity,Text, ImageBackground, Animated, StyleSheet, View, SharedElement} from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FadeInView } from "../../../components/animations/fade.animation";

import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Back from "../../../../assets/images/ground.png"
import { ProgressItem } from "../components/progressitem";
import { pics } from "../../../data/data";

// import ProgressCircle from 'react-native-progress-circle'


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Progress = ({ navigation, route }) => {
  const [isToggled, setIsToggled] = useState(false);

  const { item } = route.params;

  const scrollY = useRef(new Animated.Value(0)).current;

  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

  return (
    <SafeArea>
     <ImageBackground blurRadius={50} style={{width: '100%', height: 1000, flex: 1}} source={Back}>
     <Spacer position="left" size="large">
      <View style={{flexDirection:"row", marginBottom: 5}}>
     <FontAwesome5 name="guitar" size={35} color="purple" />
      <Text style={{fontWeight: "700", fontSize: 22, marginBottom: 15, marginVertical:5}}>VMS</Text>
      </View>
     </Spacer>
     <Spacer position="left" size="large">
     <Text style={{fontWeight: "600", fontSize: 30, marginBottom: 15, marginVertical:5}}>{item.name}</Text>
     </Spacer>
     <RestaurantList
        data={[1,2,3,4,5,]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() => navigation.navigate("Video")}
            >
              <Spacer position="bottom" size="large">
              <FadeInView>
                  <ProgressItem pic={pics}/>
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />

     </ImageBackground>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  bg: {
   position: "absolute",
   width: "100%",
   height: "50%",
   backgroundColor: "red",
   transform: [{ translateY: 100 / 2}],
   borderRadius: 32,
  }
})