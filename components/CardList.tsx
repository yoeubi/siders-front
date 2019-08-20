import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { getUser } from "../firebase";

const CardListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const CardList = () => {
  getUser();
  return (
    <CardListWrap>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListWrap>
  );
};

export default CardList;
