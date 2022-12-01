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


export const InstrumentTest = ({ instrument = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = instrument;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard style={{height: 130, borderRadius: 20}} elevation={5}>
      <View style={{flex: 1, padding: SPACING}}>
      <SharedElement id={`item.${instrument.id}.bg`} style={[StyleSheet.absoluteFillObject]}>
       <View style={[
        StyleSheet.absoluteFillObject,
       ]}/>
       </SharedElement>
       <View style={{flexDirection: "column",flex: 1,paddingLeft: 15}}>
       <Text style={styles.name}>{instrument.name}</Text>
       <Text style={styles.description}>
        Learn how to play the  {'\n'}
         {instrument.name} in Church from {'\n'}Zero to Mastery</Text> 
       </View>
       <RestaurantCardCover source={instrument.img} style={styles.image} />
      </View>
      <SharedElement id="general.bg">
      <View />
      </SharedElement>
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