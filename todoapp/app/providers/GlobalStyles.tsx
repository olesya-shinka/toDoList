"use client";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function GlobalStyles({ children }: Props) {
  return <Styles>{children}</Styles>;
}

const Styles = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  height: 100%;
  display: flex;
`;

export default GlobalStyles;
