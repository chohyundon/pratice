"use client";

import styled from "styled-components";

const Title = styled.h2`
  display: flex;
  position: absolute;
  top: 50px;
  left: 30px;
`;

const SubTitle = styled.h4`
  display: flex;
  position: absolute;
  top: 79px;
  left: 30px;
`;

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  );
};

export default Heading;
