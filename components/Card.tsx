import React from "react";
import styled from "styled-components";

const CardWrap = styled.li`
  flex-basis: 48%;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:nth-child(2n) {
    margin-left: auto;
  }
  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const CardImgWrap = styled.div``;

const CardContent = styled.div`
  padding: 10px;
  h2 {
    font-size: 1.5rem;
    line-height: 1.33;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
`;

const Card = () => {
  return (
    <CardWrap>
      <CardImgWrap>
        <img src="../static/sidus1.jpg" />
      </CardImgWrap>
      <CardContent>
        <h2>채팅기능 포함 쇼핑몰 앱 구축</h2>
        <p>서울</p>
        <span>2019.08.12</span>
      </CardContent>
    </CardWrap>
  );
};

export default Card;
