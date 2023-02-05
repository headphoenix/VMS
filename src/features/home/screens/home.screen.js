// import React, { useContext, useState,  useRef } from "react";
// import { FlatList, TouchableOpacity,Text, ImageBackground, Animated, StyleSheet} from "react-native";
// import styled from "styled-components/native";
// import { ActivityIndicator, Colors } from "react-native-paper";

// import { SafeArea } from "../../../components/utility/safe-area.component";
// import { Spacer } from "../../../components/spacer/spacer.component";

// import { FadeInView } from "../../../components/animations/fade.animation";
// import {InstrumentList} from "../components/instrument-list.styles"

// import { InstrumentInfoCard } from "../components/instrument-info-card.component"
// import { Instruments } from "../../../data/data";

// import Back from "../../../../assets/images/ground.png"
// // import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
// // import { FavouritesContext } from "../../../services/favourites/favourites.context";


// const Loading = styled(ActivityIndicator)`
//   margin-left: -25px;
// `;
// const LoadingContainer = styled.View`
//   position: absolute;
//   top: 50%;
//   left: 50%;
// `;

// export const HomeScreen = ({ navigation }) => {
//   const [isToggled, setIsToggled] = useState(false);
//   const numColumns = Math.ceil(Instruments.length / 2);

//   const scrollY = useRef(new Animated.Value(0)).current;

//   const SPACING = 20;
//   const AVATAR_SIZE = 70;
//   const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

//   return (
//     <SafeArea>
//      <ImageBackground blurRadius={50} style={{width: '100%', height: 1000, flex: 1}} source={Back}>

//      <InstrumentList 
//       data={Instruments}
//       onScroll={Animated.event(
//         [{nativeEvent: {contentOffset: { y: scrollY}}}],
//         {useNativeDriver: true},
//       )}
//       renderItem={({ item, index }) => {
//         const inputRange = [
//           -1,
//           0,
//           ITEM_SIZE * index,
//           ITEM_SIZE * (index + 2)
//         ]

//         const opacityInputRange = [
//           -1,
//           0,
//           ITEM_SIZE * index,
//           ITEM_SIZE * (index + 0.5)
//         ]

//         const scale = scrollY.interpolate({
//           inputRange,
//           outputRange: [1,1,1,0]

//         })

//         const opacity = scrollY.interpolate({
//           inputRange: opacityInputRange,
//           outputRange: [1,1,1,0]

//         })

//         return (
//           // <TouchableOpacity
//           //   onPress={() =>
//           //     navigation.navigate("RestaurantDetail", {
//           //       restaurant: item,
//           //     })
//           //   }
//           // >
//             <Spacer position="bottom" size="large">
//               <Animated.View style={{transform: [{scale}], opacity}}>
//             <FadeInView>
//                 <InstrumentInfoCard instrument={item} />
//               </FadeInView>
//               </Animated.View>
//             </Spacer>
//           // </TouchableOpacity>
//         );
//       }}
//       keyExtractor={(item) => item.name}
//      />
//      </ImageBackground>
//     </SafeArea>
//   );
// };
