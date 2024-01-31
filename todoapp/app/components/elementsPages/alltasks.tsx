"use client";
import React from "react";
import styled from "styled-components";

function AllTasks() {
  return <Styles>AllTasks</Styles>;
}

const Styles = styled.div`
  background-color: grey;
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 3px 2px 5px darkgrey;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
`;

export default AllTasks;
