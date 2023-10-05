"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const SearchTag = styled.div`
  position: relative;
  left: 200px;
  @media (max-width: 1000px) {
    display: flex;
    position: absolute;
    left: 35%;
  }
`;

const Title = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 255px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  height: 25px;
  gap: 8px;
  box-shadow: 1px 1px 1px lightgray;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70px;
  &:nth-child(1) {
    border-right: 1px solid;
  }
  &:nth-child(3) {
    border-left: 1px solid;
  }
`;

export default function Search() {
  return (
    <SearchTag>
      <Title>
        <Text>AnyWere</Text>
        <Text>AnyWeek</Text>
        <Text>AddGuest</Text>
        <BiSearch
          style={{
            display: "flex",
            backgroundColor: "red",
            color: "white",
            border: "1px solid red",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
          }}
        />
      </Title>
    </SearchTag>
  );
}
