"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import styled from "styled-components";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  position: absolute;
  top: 150px;
`;

const Footer = styled.div`
  display: flex;
  position: absolute;
  top: 61px;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  position: absolute;
  display: flex;
  top: 450px;
  left: 30px;
  font-size: 15px;
  color: #9d9d9d;
  font-weight: 7600;
  gap: 10px;
`;

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something Wrong😑");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <InputBox>
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          type="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </InputBox>
    </>
  );

  const footerContent = (
    <Footer>
      <hr />
      <Button
        onClick={() => {}}
        label="Continue with Github"
        icon={AiFillGithub}
      />
      <Title>
        Already have an account?
        <div onClick={registerModal.onClose}>Login</div>
      </Title>
    </Footer>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title={"Register"}
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      ></Modal>
    </div>
  );
};

export default RegisterModal;
