import styled from "styled-components/native";
import { Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

import { Text } from "../../../components/typography/text.component";


export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[3]};
  margin-right: auto;
  margin-left: auto;
`;

export const AuthButton = styled(Button).attrs({
  color: "purple",
})`
  ${Platform.OS === "ios" ? "padding: 8px" : "padding: 4px" };
`;

export const AuthInput = styled(TextInput)`
  ${Platform.OS === "ios" ? "width: 325px; height: 50px" : "width: 275px; height: 45px" } 
`;


export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;