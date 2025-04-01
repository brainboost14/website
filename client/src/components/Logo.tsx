import React from "react";
import LogoImage from "logo.png"; // Ensure this path is correct

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 60 }) => {
  return <img src={LogoImage} alt="Logo" style={{ width: size, height: size }} />;
};
