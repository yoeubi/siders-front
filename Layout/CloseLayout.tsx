import React from "react";
import CloseHeader from "./../components/CloseHeader";
import { MainWithNormalHeader as Main } from "./../components/common/index";

const CloseLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <CloseHeader />
      <Main>{children}</Main>
    </>
  );
};

export default CloseLayout;
