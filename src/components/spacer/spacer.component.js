import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  xsmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  sp: 4.5,
  xlarge: 5,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({variant}) => variant};
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return ( 
        <SpacerView variant={variant}>{children}</SpacerView>
    )
}

// styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};