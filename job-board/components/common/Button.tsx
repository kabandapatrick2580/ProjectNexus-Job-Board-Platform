// components/Button.tsx
import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ text, variant }) => {
        return <button className={`btn btn-${variant}`}>{text}</button>;
      }
export default Button;
      