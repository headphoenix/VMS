import React from "react";
import { SvgXml } from "react-native-svg";
import { Text, View, Image, Animated, StyleSheet } from "react-native";

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


export const InstrumentInfoCard = ({ instrument = {} }) => {
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
    <RestaurantCard elevation={5}>
      <View style={styles.style}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text style={{fontSize: 22, fontWeight: "700"}} variant="label">{name}</Text>
      </Info>
      </View>
    </RestaurantCard>
  );
};

 const styles = StyleSheet.create({
  style: {
    flex: 1,
    flexDirection: "row",
    padding: SPACING,
    justifyContent: "space-between"
  }
 })