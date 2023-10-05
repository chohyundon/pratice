"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { Modal } from "../Modal/Modal";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 300px;
  @media (max-width: 1000px) {
    display: flex;
    position: absolute;
    left: 85%;
    p {
      display: none;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 40px;
  gap: 5px;
  border: 1px solid lightgray;
  border-radius: 10px;
  position: relative;
  left: 30px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 85%;
  border: 1px solid lightgray;
  width: 120px;
  border-radius: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  font-size: 15px;
  padding: 10px;
`;

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  //useCallback을 사용한 이유는 버튼의 상태가 바뀔때마다 렌더링 되는 것을 방지한다
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleModal = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <Container onClick={() => {}}>
      <p>Air Bnb Your Home</p>
      <User data-value={isOpen} onClick={toggle}>
        <AiOutlineMenu></AiOutlineMenu>
        <Avatar></Avatar>
      </User>
      {isOpen && (
        <MenuContainer>
          <MenuItem onClick={() => setShow(!show)} label="Log in" />
          <MenuItem onClick={() => {}} label="Sing Up" />
          {show && <Modal show={show} toggle={toggleModal}></Modal>}
        </MenuContainer>
      )}
    </Container>
  );
}
