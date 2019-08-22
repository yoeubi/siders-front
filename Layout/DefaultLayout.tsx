import React from "react";
import Footer from "../components/Footer";
import { MainWithFixedHeader as Main } from "../components/common";
import HeaderContainer from "./../containers/HeaderContainer";

const DefaultLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
