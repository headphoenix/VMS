import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity,Text,Image, Button} from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { WebView } from 'react-native-webview';

export const SettingsScreen = ({ navigation }) => {
  const [videoFinished, setVideoFinished] = useState("Hi");

    const [isToggled, setIsToggled] = useState(false);
    const { user, onLogout } = useContext(AuthenticationContext);
  
    return (
      <SafeArea>
        <Image source={user.photoUrl}/>
        <Text>{user.email}</Text>

       <Text>Virtual Music</Text>
       <Text>{videoFinished}</Text>
       <Button title="Logout" onPress={() => onLogout()}></Button>
       <WebView
                            style={{
                                position: 'absolute',
                                width: "100%",
                                height: "50%",
                            }}
                            useWebKit
                            allowsFullscreenVideo
                            source={{
                                uri: "https://drive.google.com/file/d/1Za3OCL_NbV3EQtpgNbXRUT1ADehJoZYr/view?usp=share_link",
                            }}
                            onLoadEnd={() => setVideoFinished("Video Finished")}
                        />
                       

      </SafeArea>
    );
  };


  // import { GoogleSignIn } from 'expo-google-sign-in';
// import { fetch } from 'react-native';
// import { Platform } from 'react-native';

// const getAccessToken = async () => {
//   let accessToken;
//   if (Platform.OS === 'ios') {
//     // initialize the GoogleSignIn library
//     await GoogleSignIn.initAsync({
//       clientId: '148860956036-6nns528o4ketb2rrqrbtjamhq7mvme4r.apps.googleusercontent.com',
//     });
//     // sign in to Google
//     const { type, token } = await GoogleSignIn.signInAsync();
//     if (type === 'success') {
//       accessToken = token;
//     } else {
//       throw new Error('Failed to sign in to Google');
//     }
//   } else if (Platform.OS === 'android') {
//     // use the expo-google-sign-in library to get an OAuth 2.0 access token
//     const { type, token } = await GoogleSignIn.signInAsync({
//       clientId: '148860956036-ujnbqon056emfl7p58b2f10301st5h0v.apps.googleusercontent.com',
//       scopes: ['https://www.googleapis.com/auth/drive'],
//     });
//     if (type === 'success') {
//       accessToken = token;
//     } else {
//       throw new Error('Failed to sign in to Google');
//     }
//   }
//   return accessToken;
// };

// export const getVideoUrl = async (fileId) => {
//   // get the OAuth 2.0 access token
//   const accessToken = await getAccessToken();
//   // make an HTTP request to the Google Drive API to get the temporary URL for the video file
//   const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
//     headers: {
//       'Authorization': `Bearer ${accessToken}`,
//     },
//   });
//   // get the response data as a JavaScript object
//   const data = await response.json();
//   // return the temporary URL for the video file
//   return data.webContentLink;
// };