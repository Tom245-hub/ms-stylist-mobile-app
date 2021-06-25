import styled from "styled-components/native";
import { Image } from "react-native";

interface StyledImageProps {
  source: string;
}

export const StyledImage = styled(Image)<StyledImageProps>`
  width: 80%;
  height: 100px;
  margin: 0 0 20px 0;
`;
