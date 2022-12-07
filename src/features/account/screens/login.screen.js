import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { Image, ImageBackground,Text,TouchableOpacity,View } from "react-native";
import {
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

import Piano from "../../../../assets/images/drums.jpg"

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <KeyboardAwareScrollView>
    <SafeArea >
    <ImageBackground style={{width: 375, height: 250, borderRadius: 100, alignSelf: "center"}} source={Piano}>
    <Spacer position="left" size="medium">
    <Spacer position="top" size="medium">
    <TouchableOpacity onPress={() => navigation.goBack()} >
    <Ionicons name="chevron-back-sharp" size={35} color="black" />
    </TouchableOpacity>
    </Spacer>
    </Spacer>
    </ImageBackground>
    <View style={{flexDirection:"column", alignSelf: "center", marginRight: "auto", marginLeft: "auto"}}>
      <Spacer position="top" size="small">
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: "center"}}>Welcome</Text>
      <Text style={{paddingLeft: 50, paddingRight: 50, fontSize: 15, fontWeight: '300', textAlign: "center"}}>Use your credentials below and login to your account</Text>
      </Spacer>
      </View>
      <AccountContainer style={{marginRight: "auto", marginLeft: "auto"}}>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer position="top" size="small">
        <Text style={{textAlign: 'center',fontSize: 15, fontWeight: 'bold', color: "blue"}}>Forgot Password?</Text>
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="medium">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="medium">
        <Text style={{textAlign: "center",fontSize: 15, fontWeight: 'bold'}}>Or Login With</Text>
        </Spacer>
        <Spacer size="medium">
        <AuthButton mode="contained" >
          Google
        </AuthButton>
        </Spacer>
        <Spacer size="medium">
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{textAlign: "center",fontSize:15, fontWeight: 'bold', color: "blue"}}>Don't have an account?Sign Up</Text>
          </TouchableOpacity>
        </Spacer>
      </AccountContainer>
      </SafeArea>
      </KeyboardAwareScrollView>
  );
};