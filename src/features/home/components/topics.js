import React from "react";
import { SvgXml } from "react-native-svg";
import { Text, View, Image, Animated, StyleSheet,TouchableOpacity } from "react-native";

import { SharedElement } from 'react-navigation-shared-element';

import * as Animatable from "react-native-animatable"

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

const colorAr = [
  '#637aff',
  '#60c5a8',
  '#CCCCCC',
  '#ff5454',
  '#039a83',
  '#dcb834',
  '#8f06e4',
  'skyblue',
  '#ff4c98',
]
const bgColor = (i) => colorAr[i % colorAr.length];


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const height = 130;

const ITEM_HEIGHT = height * 0.18;


export const Topics = ({ item, index, animation, navigation, level }) => {

  return (
    <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
      <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Screen')}>
    <RestaurantCard style={{height: 130, borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: bgColor(index)}} elevation={5}>
            <Text style={styles.name}>First Love Music</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 17}}>{item.desc}</Text>
    </RestaurantCard>
    </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
   name: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 10,
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