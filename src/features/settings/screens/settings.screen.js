import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity,Text,Image, Button} from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const SettingsScreen = ({ navigation }) => {
    const [isToggled, setIsToggled] = useState(false);
    const { user, onLogout } = useContext(AuthenticationContext);
  
    return (
      <SafeArea>
        <Image source={user.photoUrl}/>
        <Text>{user.email}</Text>

       <Text>Virtual Music</Text>
       <Button title="Logout" onPress={() => onLogout()}></Button>

      </SafeArea>
    );
  };