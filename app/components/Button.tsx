"use client";

import { signIn, signOut } from "next-auth/react";
import { IconType } from "react-icons";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  top: 350px;
  text-align: center;
  position: absolute;
`;

interface ButtonProps {
  label: string;
  disabled?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, icon: Icon }) => {
  return (
    <Btn
      style={{
        width: "90%",
        borderRadius: "6px",
        color: "black",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => signIn()}
      disabled={disabled}
    >
      {Icon && <Icon size={24}></Icon>}
      {label}
    </Btn>
  );
};

export default Button;
