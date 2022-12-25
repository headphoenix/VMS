import React, { useContext, useState,  useRef } from "react";
import { FlatList, TouchableOpacity,Text, ImageBackground, Animated, StyleSheet, View, SharedElement} from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FadeInView } from "../../../components/animations/fade.animation";
import {InstrumentList} from "../components/instrument-list.styles"

import { InstrumentTest } from "../components/instrutest"
import { Instruments } from "../../../data/data";

import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Back from "../../../../assets/images/ground.png"
// import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
// import { FavouritesContext } from "../../../services/favourites/favourites.context";


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const HomeTest = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const numColumns = Math.ceil(Instruments.length / 2);
  

  const scrollY = useRef(new Animated.Value(0)).current;

  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;


  return (
    <SafeArea>
     <ImageBackground blurRadius={50} style={{width: "100%", height: 1000, flex: 1}} source={Back}>
     <Spacer position="left" size="large">
      <View style={{flexDirection:"row", marginBottom: 5}}>
     <FontAwesome5 name="guitar" size={35} color="purple" />
      <Text style={{fontWeight: "700", fontSize: 22, marginBottom: 15, marginVertical:5}}>VMS</Text>
      </View>
      <View style={{flexDirection:"row" , justifyContent: "space-between"}}>
     <Text style={{fontWeight: "700", fontSize: 22,}}>Choose Course</Text>
     <MaterialCommunityIcons style={{paddingRight: 22}} name="dots-grid" size={30} color="purple" />
     </View>
     </Spacer>
     <InstrumentList 
      data={Instruments}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: { y: scrollY}}}],
        {useNativeDriver: true},
      )}
      renderItem={({ item, index }) => {
        const inputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 2)
        ]

        const opacityInputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 0.5)
        ]

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1,1,1,0]

        })

        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1,1,1,0]

        })

        return (
          <TouchableOpacity onPress={() => navigation.navigate("Level", {
            item:item
          })}>
            <Spacer position="bottom" size="medium">
              <Animated.View style={{transform: [{scale}], opacity}}>
            <FadeInView>
                <InstrumentTest instrument={item} />
              </FadeInView>
              </Animated.View>
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