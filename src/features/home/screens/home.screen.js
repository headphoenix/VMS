import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity,Text } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FadeInView } from "../../../components/animations/fade.animation";
import {InstrumentList} from "../components/instrument-list.styles"

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

export const HomeScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
     <Text>Virtual Music School</Text>

     <InstrumentList 
      data={[]}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
            <FadeInView>
                <InstrumentInfoCard instrument={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
     />
    </SafeArea>
  );
};