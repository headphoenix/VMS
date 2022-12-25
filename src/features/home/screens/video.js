import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native'
import { SafeArea } from '../../../components/utility/safe-area.component'
import Back from "../../../../assets/images/ground.png"
import { Spacer } from '../../../components/spacer/spacer.component'
import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native'

// import { getVideoUrl } from "../../../../google-drive-api"

import WebView from 'react-native-webview'
import { AntDesign } from "@expo/vector-icons";

import * as Progress from 'react-native-progress';

import a1 from "../../../../assets/thumb/1.jpg"
import play from "../../../../assets/play.png"
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';

import { Audio, Video, AVPlaybackStatus } from 'expo-av';
import Animated from 'react-native-reanimated'




const FavouriteButton = styled(TouchableOpacity)`
  right: 25px;
  z-index: 9;
`
const triggerAudio = async (ref) => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    ref.current.playAsync();
  };


export const VideoScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get("window");

    const [playVideo, setPlayVideo] = useState(false)

    const ref = useRef(null);
    const [duration, setDuration] = useState(0);

    const [status, setStatus] = useState({});

    const scrollX = useRef(new Animated.Value(0)).current

    const [url, setUrl] = useState(null);
   
    // useEffect(() => {
    //   // get the URL for the video file on Google Drive
    //    getVideoUrl('1Za3OCL_NbV3EQtpgNbXRUT1ADehJoZYr').then((url) => {
    //     setUrl(url);
    //     console.log(url)
    //   });
      
    // }, []);

    useEffect(() => {
        if (status.isPlaying) triggerAudio(ref);
    }, [ref, status.isPlaying]);

    function renderHeaderComponents() {
        return (
            <>
                {/* Back */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Ionicons onPress={() => navigation.goBack()} name="chevron-back-sharp" size={32} color="white" />
                </View>
                {/* Favourite  */}
                <FavouriteButton>
                    <AntDesign
                        name="hearto"
                        size={30}
                        color='white'
                    />
                </FavouriteButton>
            </>
        )
    }
  

    function renderHeader() {
        if (playVideo) {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 12,
                        paddingBottom: 8,
                        height: 85,
                        backgroundColor: "black",
                        alignItems: 'flex-end'
                    }}
                >
                    {renderHeaderComponents()}
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        position: 'absolute',
                        top: height > 800 ? 40 : 20,
                        left: 0,
                        right: 0,
                        flexDirection: "row",
                        paddingHorizontal: 24,
                        zIndex: 1,
                    }}
                >
                    {renderHeaderComponents()}
                </View>
            )
        }
    }

    function renderVideoSection() {
        return (
            <View
                style={{
                    height: "45%",
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: "#333333"
                }}
            >
                {/* Thumbnail */}
                <ImageBackground
                    source={a1}
                    style={{
                        width: "100%",
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Play Button */}
                    <TouchableOpacity onPress={() => setPlayVideo(true)} >
                        <FontAwesome mode="contained" name="play" size={32} color='lightgreen' />
                    </TouchableOpacity>

                    {playVideo &&
                        <WebView
                            // ref={ref}
                            // onPlaybackStatusUpdate={(status) => setStatus(status)}
                            style={{
                                position: 'absolute',
                                width: "100%",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                            }}
                            source={{
                                uri: "https://drive.google.com/file/d/1Za3OCL_NbV3EQtpgNbXRUT1ADehJoZYr/view?usp=share_link",
                            }}
                            // useNativeControls
                            // resizeMode="cover"
                            // isLooping={false}
                            // shouldPlay={true}
                            // onLoad={(data) => setDuration(Number(data.duration))}
                        />
                    }
                </ImageBackground>
            </View>
        )
    }

    function renderContent() {
        return (
            <View
            style={{
                flex: 1
            }}
            >
             <TouchableOpacity
                style={{
                    flexDirection:"row",
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    justifyContent: 'space-around'
                }} >
                  <View style={{
                   backgroundColor:"#fde6e6",
                   paddingVertical:5,
                   paddingHorizontal:10,
                   borderRadius:6
               }}>
                   <Text style={{
                       fontSize:18,
                   }}>1</Text>
               </View>
               <View>
                   <Text style={{
                       color:"#345c74",
                       fontSize:18,
                       paddingLeft:20,
                       width:180
                   }}>
                       Indentifying the White Keys
                   </Text>
                   <Text style={{
                       color:"#f58084",
                       fontSize:15,
                       paddingLeft:20
                   }}>
                       2 hours 22 minutes
                   </Text>
               </View>
               <Text style={{
                   color:"#345c74",
                   fontSize:14,
                   width:50,
                   paddingVertical:5,
                   paddingHorizontal:10,
               }}>
                   25%
               </Text>

               <Progress.Circle
                    progress={0.7}
                    // indeterminate={true}
                    radius={17}
                    borderWidth={1.0}
                    color="#f58084"
                    shadowColor="#FFF"
                    bgColor="#fff2f2"
                    style={{
                        marginTop: 15
                    }}
               >
                   <FontAwesome style={{alignSelf: "center", right: -1,bottom: 30}} name="play" size={18} color='lightgreen' />
                 </Progress.Circle>
                </TouchableOpacity>
                 <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginLeft: 15,
                    marginRight: 15,
                 }}>
                <View style={{
                   backgroundColor:"#f58084",
                   alignItems:"center",
                   borderRadius:10,
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontSize:18,
                       margin: 15,
                       marginLeft: 15,
                       marginRight: 15,
                       textAlign: 'center'
                   }}>
                       Previous Video
                   </Text>
               </View>
               <View style={{
                   backgroundColor:"#f58084",
                   alignItems:"center",
                   borderRadius:10,
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontSize:18,
                       margin: 15,
                       marginLeft: 25,
                       marginRight: 25,
                       textAlign: 'center'
                   }}>
                       Next Video
                   </Text>
               </View>
               </View>
  
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* <Spacer position="left" size="large">
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <FontAwesome5 name="guitar" size={35} color="purple" />
                        <Text style={{ fontWeight: "700", fontSize: 22, marginBottom: 15, marginVertical: 5 }}>VMS</Text>
                    </View>
                </Spacer> */}
            {/* Header Bar */}
            {renderHeader()}
            {/* Video */}
            {renderVideoSection()}
              {/* Content */}
            {renderContent()}
        </View>
    )
}


// https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'