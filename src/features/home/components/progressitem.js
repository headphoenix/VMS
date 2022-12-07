import React from "react";
import { SvgXml } from "react-native-svg";
import { Text, View, Image, Animated, StyleSheet, } from "react-native";

import { SharedElement } from 'react-navigation-shared-element';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./instrument-info-card.styles";


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const height = 130;

const ITEM_HEIGHT = height * 0.18;


export const ProgressItem = () => {

  return (
    <RestaurantCard style={{height: 130, borderRadius: 20}} elevation={5}>
      <View style={{flex: 1, padding: SPACING}}>
       <View />
       <View style={{flexDirection:"column",flex: 1,paddingLeft: 15}}>
       <Text style={styles.name}>Hello</Text>
       <Text style={styles.description}>
        Learn how to play the  {'\n'}
         Hi in Church from {'\n'}Zero to Mastery
         </Text> 
       </View>
       <RestaurantCardCover style={styles.image} />
      </View>
      <View />
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
   name: {
    fontWeight: "700",
    fontSize: 18,
   },
   description: {
    fontSize: 15,
    opacity: 0.7,
   },
   image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: SPACING,
   },
});