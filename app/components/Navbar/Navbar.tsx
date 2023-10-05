"use client";

import React from "react";
import { Container } from "../Container";
import styled from "styled-components";
import { Logo } from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const NavigationBar = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 230px;
`;

export default function Navbar() {
  return (
    <NavigationBar>
      <Container>
        <Content>
          <Logo />
          <Search />
          <UserMenu />
        </Content>
      </Container>
    </NavigationBar>
  );
}
