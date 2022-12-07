import { Dimensions,View, Text, StyleSheet, Image, ScrollView, FlatList,Platform } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable"
import { SharedElement } from "react-navigation-shared-element";

import { useRef } from "react";
import { Level, Animations, color } from "../../../data/data"

import { LevelItem } from "../components/LevelItem";
import { Topics } from "../components/topics";

export const LevelDetails = ({ navigation, route }) => {
    const { item } = route.params

    const SPACING = 20;
    const AVATAR_SIZE = 70;
    const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

    const renderItem = ({ item, index }) => (
        <LevelItem item={item} index={index} animation={animation} navigation={navigation} />)
       
    const rendre = ({ item, index }) => (
        <Topics item={item} index={index} animation={animation} navigation={navigation} />)
    
    
        const viewRef = useRef(null);
        
        const light = color[Math.floor(Math.random() * color.length)]

        const animation = Animations[Math.floor(Math.random() * Animations.length)]
//   console.log('====================================');
//   console.log(Math.floor(Math.random() * Animations.length), Math.random() * Animations.length, Animations.length);
//   console.log('====================================');

        return (
            <SafeArea style={{ flex: 1 }}>
                <SharedElement id={`item.${item.id}.bg`} style={StyleSheet.absoluteFillObject}>
                    <View
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                borderRadius: 0,
                                backgroundColor: light,
                                height: "35%"
                            }
                        ]}
                    />
                </SharedElement>
                <Spacer position="left" size="medium">
                    <Ionicons onPress={() => navigation.goBack()} name="chevron-back-sharp" size={35} color="black" />
                </Spacer>
                <SharedElement id={`item.${item.id}.name`}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>We've prepared a special program {'\n'}for you  based on your level</Text>
                </SharedElement>
                <SharedElement id={`item.${item.id}.image`} style={styles.image}>
                    <Image source={item.img} style={styles.image} />
                </SharedElement>
                <SharedElement id='general.bg'>
                    <ScrollView style={styles.bg}>
                    <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25, paddingBottom: 10}}>Choose Your Level</Text>
                            <Animatable.View
                                ref={viewRef}
                                easing={'ease-in-out'}
                                duration={500}
                                style={styled.container}>
                                <FlatList
                                    data={Level}
                                    keyExtractor={(item) => item.id}
                                    numColumns={2}
                                    renderItem={renderItem}
                                    showsVerticalScrollIndicator={false}
                                    scrollEnabled={false}
                                    // contentContainerStyle={{ paddingBottom: 5 }}
                                />
                            </Animatable.View>
                            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25, paddingBottom: 10}}>Special Topics</Text>
                            <Animatable.View
                                ref={viewRef}
                                easing={'ease-in-out'}
                                duration={500}
                                style={styled.container}>
                                <FlatList
                                    data={Level}
                                    keyExtractor={(item) => item.name}
                                    renderItem={rendre}
                                    showsVerticalScrollIndicator={false}
                                    scrollEnabled={false}
                                    // contentContainerStyle={{ paddingBottom: 5 }}
                                />
                            </Animatable.View>
                    </ScrollView>
                </SharedElement>
            </SafeArea>
        )
}


const styled = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0, 0, 0, .08)',
    },
    listEmpty: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        height: 200,
        width: Dimensions.get('window').width / 2 - 16,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
    },
    image: {
        height: 150,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#637aff',
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})

const styles = StyleSheet.create({
    name: {
        fontWeight: "700",
        fontSize: 30,
        position: "absolute",
        top: 5,
        left: 10,
    },
    description: {
        fontSize: 16,
        opacity: 0.7,
        paddingTop: 10,
        position: 'absolute',
        top: 35,
        left: 10
    },
    image: {
        width: 125,
        height: 125,
        resizeMode: "contain",
        position: "absolute",
        top: Platform.OS === "ios" ? 74 : 45,
        right: 7,
    },
    bg: {
        position: "relative",
        width: "100%",
        height: "80%",
        top: 105,
        backgroundColor: "white",
        transform: [{ translateY: 100 / 2 }],
        borderRadius: 32,
        paddingTop: 15,
    }
})