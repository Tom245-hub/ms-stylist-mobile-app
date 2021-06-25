import React from "react";
import { TouchableHighlight, View, Text } from "react-native";

import { StyledButton } from "./Button.css";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <StyledButton>
        <Text>{title}</Text>
      </StyledButton>
    </TouchableHighlight>
  );
};

export default Button;
