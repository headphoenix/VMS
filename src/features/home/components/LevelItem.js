import { Image,Dimensions,TouchableOpacity, View,Icon, Text, StyleSheet, ImageBackground } from "react-native"
import * as Animatable from "react-native-animatable"
import { Feather } from "@expo/vector-icons";


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

export const LevelItem = ({ level, item, index, animation, navigation,}) => {

  // console.log(item?.name)

  // create a function that will return the right item index based on the name
 // TypeError: undefined is not an object (evaluating 'item.level[0]')
  const Level = (item) => {
    if (item.name === "Ultra Beginner") {
      return level.levels[0]
    } else if (item.name === "Beginner") {
      return level.levels[1]
    } else if (item.name === "Intermediate") {
      return level.levels[2]
    } else if (item.name === "Advanced") {
      return level.levels[3]
    };
  }

    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
        <View style={styled.listItem}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('progress', { 
               level: Level(item),
            })}>
            <View style={[styled.image, { backgroundColor: bgColor(index) }]}>
            <Text style={styled.name}>{item.name}</Text>
            <Text style={{textAlign: "center", padding: 10, fontSize: 18}}>{item.desc}</Text>
            {/* <Image style={{height: 100, width: 125, left: -20,bottom: 40, zIndex: -1}} source={item.img} /> */}
            </View>
          </TouchableOpacity>
         
        </View>
      </Animatable.View>
    )
  }

  const styled = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        paddingTop: 7,
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
        height: 175,
        width: Dimensions.get('window').width / 2 - 16,
        backgroundColor: 'white',
        marginLeft: 11,
        borderRadius: 10,
    },
    image: {
        height: 150,
        margin: 5,
        borderRadius: 10,
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