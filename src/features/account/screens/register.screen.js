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

import Piano from "../../../../assets/images/piano.jpg"

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <>
    <ImageBackground style={{width: 400, height: 300}} source={Piano} >
    <Spacer position="top" size="large">
    <Spacer position="left" size="medium">
    <Ionicons style={{paddingTop: 10}} onPress={() => navigation.goBack()} name="chevron-back-sharp" size={35} color="black" />
    </Spacer>
    </Spacer>
    </ImageBackground>
    <SafeArea >
    <View style={{position: "relative",flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: 'center'}}>
      <Text style={{fontSize: "30px", fontWeight: 'bold'}}>Sign Up</Text>
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
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        <Spacer size="medium">
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
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="medium">
        <Text style={{paddingLeft: 115,fontSize: "15px", fontWeight: 'bold'}}>Or Register with</Text>
        </Spacer>
        <Spacer size="medium">
        <AuthButton mode="contained" >
          Google
        </AuthButton>
        </Spacer>
        <Spacer size="medium">
        <Text onPress={() => navigation.goBack()} style={{paddingLeft: 50,fontSize: "15px", fontWeight: 'bold', color: "blue"}}>Already Have an Account?Log In</Text>
        </Spacer>
      </AccountContainer>
      </SafeArea>
      </>
  );
};