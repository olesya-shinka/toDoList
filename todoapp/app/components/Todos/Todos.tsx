"use client";
import { useGlobalState } from "@/app/context/GlobalProvider";
import React from "react";
import styled from "styled-components";

function Todos() {
  const { state } = useGlobalState();

  return <Styles>Todos</Styles>;
}

const Styles = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: grey;
  border: 2px solid;
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;

export default Todos;
