import React from "react";
import { StyledImage } from "./Image.css";

interface ImageProps {
  source: string;
}

const Image: React.FC<ImageProps> = ({ source }) => {
  return <StyledImage source={source} />;
};

export default Image;
