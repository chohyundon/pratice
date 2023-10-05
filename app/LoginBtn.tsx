import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const GitHub = styled.button`
  width: 90%;
  display: flex;
  position: absolute;
  top: 40%;
  left: 5%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 20px;
`;

export default function LoginBtn() {
  return (
    <div>
      <GitHub
        onClick={() => {
          signIn();
        }}
      >
        <AiFillGithub />
        깃허브로 로그인하기
      </GitHub>
    </div>
  );
}
