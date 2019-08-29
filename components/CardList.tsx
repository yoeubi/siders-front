import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const CardList = () => {
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
