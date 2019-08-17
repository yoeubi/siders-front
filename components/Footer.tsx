import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  background-color: #181818;
  color: #fff;
  padding: 20px;
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>Developer: 성중원</p>
      <p>
        Email:&nbsp;
        <a href="mailto: yoeubi28@gmail.com">yoeubi28@gmail.com</a>
      </p>
    </FooterWrap>
  );
};

export default Footer;
