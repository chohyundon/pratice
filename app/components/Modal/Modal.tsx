import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import LoginBtn from "../../LoginBtn";

interface ModalProps {
  show: boolean;
  toggle: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: absolute;
  right: 500px;
  width: 500px;
  height: 400px;
  border: 1px solid;
  z-index: 2;
  border-radius: 15px;
  background-color: white;
`;

const Top = styled.div`
  display: flex;
  position: relative;
  height: 30px;
  width: 95%;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

const Text = styled.h2`
  position: relative;
  left: 30px;
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  left: 180px;
`;

const Button = styled.button`
  width: 90%;
  display: flex;
  position: absolute;
  top: 40%;
  left: 5%;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 7px;
  background-color: #ff6969;
`;

const Login = styled.button`
  width: 90%;
  display: flex;
  position: absolute;
  top: 60%;
  left: 5%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 20px;
`;

export const Modal: React.FC<ModalProps> = ({ show, toggle }) => {
  return (
    <>
      {show && <Overlay />}
      {show && (
        <ModalContainer>
          <Top>
            <AiOutlineClose onClick={toggle}></AiOutlineClose>
            <Title>로그인 및 회원가입</Title>
          </Top>
          <div>
            <Text>에어비앤비에 오신것을 환영합니다</Text>
            <Text>로그인 해주세요</Text>
          </div>
          <LoginBtn />
          <Login>계속</Login>
        </ModalContainer>
      )}
    </>
  );
};
