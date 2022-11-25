import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 

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
    <>
    <SafeArea >
    <ImageBackground style={{width: 400, height: 250, borderRadius: 100}} source={Piano}>
    <Spacer position="left" size="medium">
    <Ionicons onPress={() => navigation.goBack()} name="chevron-back-sharp" size={35} color="black" />
    </Spacer>
    </ImageBackground>
    <View style={{position: "relative",flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: 'center'}}>
      <Spacer position="top" size="small">
      <Text style={{paddingLeft: 110,fontSize: "30px", fontWeight: 'bold'}}>Welcome</Text>
      <Text style={{paddingLeft: 50, paddingRight: 50, fontSize: "15px", fontWeight: '300'}}>Use your credentials below and login to your account</Text>
      </Spacer>
      </View>
      <AccountContainer>
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
        <Spacer size="medium">
        <Text style={{paddingLeft: "32%",fontSize: "15px", fontWeight: 'bold', color: "blue"}}>Forgot Password?</Text>
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
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
        <Text style={{paddingLeft: 115,fontSize: "15px", fontWeight: 'bold'}}>Or Login With</Text>
        </Spacer>
        <Spacer size="medium">
        <AuthButton mode="contained" >
          Google
        </AuthButton>
        </Spacer>
        <Spacer size="medium">
        <Text onPress={() => navigation.navigate("Register")} style={{paddingLeft: 50,fontSize: "15px", fontWeight: 'bold', color: "blue"}}>Don't have an account?Sign Up</Text>
        </Spacer>
      </AccountContainer>
      </SafeArea>
      </>
  );
};