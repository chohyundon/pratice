import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ImageBar = styled.div`
  @media (min-width: 100px) {
    display: flex;
    position: absolute;
    left: 30px;
  }
`;

export const Logo = () => {
  const router = useRouter();

  return (
    <ImageBar>
      <Image
        src="/images/logo.png"
        alt="air-bnb-Logo"
        height="30"
        width="100"
      />
    </ImageBar>
  );
};
