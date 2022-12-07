import React from "react";
import { Text,View,Image, ImageBackground,TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SvgXml } from "react-native-svg";
import { FontAwesome5 } from '@expo/vector-icons'; 

import Back from "../../../../assets/images/ground.png"


import {
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
    return (
     <>
     <SafeArea>
     <ImageBackground style={{width: '100%', height: 1000, flex: 1}} source={Back}>
      <View style={{flex: 0.95}}>
        <Spacer position='left' size='medium'>
        <Spacer position="top" size='small'>
      <View style={{flexDirection:"row", marginBottom: 5}}>
     <FontAwesome5 name="guitar" size={35} color="purple" />
      <Text style={{fontWeight: "700", fontSize: 22, marginBottom: 15, marginVertical:5}}>VMS</Text>
      </View>

        
        <Spacer position="top" size='large'>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Learn Music</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Anytime Anywhere</Text>
        <Spacer position="top" size='small'>
        <Text style={{fontSize: 15, fontWeight: '300'}}>Learn any type of musical instrument</Text>
        </Spacer>
        </Spacer>
        </Spacer>

        </Spacer>
        </View>

        <Spacer position='left' size='xlarge'>
        <Spacer position='right' size='xlarge'>
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
           Join Now
        </AuthButton>
        </Spacer>
        </Spacer>
        </ImageBackground>
       
     
        
        

        </SafeArea>
     </>
    );
  };