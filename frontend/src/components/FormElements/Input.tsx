import React from "react";
import { StyledInput } from "./Input.css";

interface InputProps {
  onChangeText: (arg: string) => void;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <StyledInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
