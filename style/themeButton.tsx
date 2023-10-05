"use client";

import React, { useState } from "react";
import { Mode } from "./Mode";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

const Button = styled.div`
  cursor: pointer;
`;

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? Mode.dark : Mode.light}>
        <GlobalStyle />
        <Button onClick={toggle}>{theme === "light" ? "🌕" : "🌞"}</Button>
      </ThemeProvider>
    </div>
  );
}
