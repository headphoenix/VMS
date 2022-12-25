// Description: This file contains the code for making an HTTP request to the Google Drive API to get the temporary URL for a video file.
// Give me alternative solutions to this problem.

import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';

const getAccessToken = async () => {
  let redirectUrl, clientId;
  if (Platform.OS === 'ios') {
    // use the iOS client ID and redirect URL
     redirectUrl = 'com.headphoenix.VMS:/oauth2redirect/google';
    clientId = '148860956036-6nns528o4ketb2rrqrbtjamhq7mvme4r.apps.googleusercontent.com';
  } else if (Platform.OS === 'android') {
    // use the Android client ID and redirect URL
    redirectUrl = 'com.headphoenix.VMS:/oauth2redirect/google';
    clientId = '148860956036-ujnbqon056emfl7p58b2f10301st5h0v.apps.googleusercontent.com';
  }

  // start the OAuth 2.0 flow using expo-auth-session
  const result = await AuthSession.startAsync({
    authUrl:
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `&client_id=${clientId}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&response_type=code` +
      `&access_type=offline` +
      `&prompt=select_account` +
      `&scope=https://www.googleapis.com/auth/drive`,
  });

  if (result.type === 'success') {
    // exchange the authorization code for an access token
    const response = await fetch(
      'https://www.googleapis.com/oauth2/v4/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `code=${result.params.code}` +
              `&client_id=${clientId}` +
              `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
              '&grant_type=authorization_code',
      }
    );
    const data = await response.json();
    // return the access token
    return data.access_token;
  } else {
    throw new Error('Failed to sign in to Google');
  }
};

export const getVideoUrl = async (fileId) => {
  // get the OAuth 2.0 access token
  const accessToken = await getAccessToken();
  console.log(accessToken)
  // make an HTTP request to the Google Drive API to get the temporary URL for the video file
  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  // get the response data as a JavaScript object
  const data = await response.json();
  // return the temporary URL for the video file
  return data.webContentLink;
};

// import * as GoogleSignIn from 'expo-google-sign-in';
// import { fetch } from 'react-native';
// import { Platform } from 'react-native';

// const getAccessToken = async () => {
//   let accessToken;
//   if (Platform.OS === 'ios') {
//     // initialize the GoogleSignIn library
//     await GoogleSignIn.initAsync({
//       clientId: 'com.googleusercontent.apps.148860956036-6nns528o4ketb2rrqrbtjamhq7mvme4r',
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
//   console.log(data.webContentLink)
//   return data.webContentLink;
// };