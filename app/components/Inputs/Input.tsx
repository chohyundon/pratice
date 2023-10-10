"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 50px;
  left: 20px;
  margin: 5px;
`;

const Label = styled.div`
  display: flex;
  position: absolute;
  font-size: 13px;
  left: 2px;
  top: 1px;
`;

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <InputContainer>
      {formatPrice && <BiDollar size={24} />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        style={{ height: "50px" }}
      ></input>
      <Label>{label}</Label>
    </InputContainer>
  );
};

export default Input;
