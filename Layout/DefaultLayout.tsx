import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";
import { MainWithFixedHeader as Main } from "../components/common";

const DefaultLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
