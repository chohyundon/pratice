import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};
