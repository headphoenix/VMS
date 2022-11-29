import { Dimensions,TouchableOpacity, View,Icon, Text, StyleSheet } from "react-native"
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

export const LevelItem = ({ item, index, animation, navigation, level }) => {
    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
        <View style={styled.listItem}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Screen')}>
            <View style={[styled.image, { backgroundColor: bgColor(index) }]} />
          </TouchableOpacity>
          <View style={styled.detailsContainer}>
            <Text style={styled.name}>{item.name}</Text>
            <Feather name="more-vertical" size={20} color='#000' />
          </View>
        </View>
      </Animatable.View>
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
        marginLeft: 11,
        borderRadius: 10,
    },
    image: {
        height: 150,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#637aff',
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})