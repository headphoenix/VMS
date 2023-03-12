import React, {useEffect, useState} from "react";
import { SvgXml } from "react-native-svg";
import { Text, View, Image, Animated, StyleSheet, } from "react-native";
import { Card } from "react-native-paper";
import * as Progress from 'react-native-progress';
import HTMLParser from 'react-native-html-parser';



import { SharedElement } from 'react-navigation-shared-element';

import {
  RestaurantCard,
  ProgressCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./instrument-info-card.styles";
import { Spacer } from "../../../components/spacer/spacer.component";


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const height = 130;

const ITEM_HEIGHT = height * 0.18;


export const ProgressItem = ({pic, item}) => {

  const [title, setTitle] = useState('');

  useEffect(() => {
    async function fetchTitle() {
      try {
        const response = await fetch(item.link);
        const html = await response.text();
        const parsedHtml = HTMLParser.parse(html);
        const titleTag = parsedHtml.querySelector('title');
        setTitle(titleTag.childNodes[0].rawText);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTitle();
  }, []);


  return (
    <Card style={{height: 165, borderRadius: 20}} elevation={5}>
      <Spacer position="left" size="medium">
      <Spacer position="top" size="medium">
      <Spacer position="right" size="medium">
       <View style={{flexDirection: "row"}}>
      <Image source={pic[Math.floor(Math.random() * pic.length)]} style={styles.image} />
      <Spacer>
      <Text style={{fontSize: 20, paddingLeft: 10}}>Lesson {item.id}</Text>
      <Text style={{fontSize: 15, paddingLeft: 10, paddingTop: 6, fontWeight: "300"}}>{title}</Text>
      </Spacer>
      </View>
      <Spacer>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={{fontSize: 18, fontWeight: "700"}}>Progress</Text>
      <Text style={{fontSize: 17, color: "purple", fontWeight: "700"}}>0%</Text> 
      </View>
      <Spacer>
      <Progress.Bar progress={0} height={13} borderRadius={5} borderColor={"#ffffff"} unfilledColor={"lightgrey"} color={"purple"} width={null} />
      </Spacer>
      </Spacer>
      </Spacer>
      </Spacer>
      </Spacer>
      
      {/* <View style={{flexDirection:"column",flex: 1,paddingLeft: 15}}>
       <Text style={styles.name}>Hello</Text>
       <Text style={styles.description}>
        Learn how to play the  {'\n'}
         Hi in Church from {'\n'}Zero to Mastery
         </Text> 
       </View> */}

    </Card>
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
    width: 65,
    height: 68,
    borderRadius: 20,
    // position: "absolute",
    bottom: 0,
   },
});