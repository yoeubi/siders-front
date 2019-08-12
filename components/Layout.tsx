import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 50px;
  padding: 20px;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
