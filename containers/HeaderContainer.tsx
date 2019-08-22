import React, { useState, useCallback } from "react";
import DefaultHeader from "../components/DefaultHeader";
import Portal from "../modal";
import Tab from "../components/Tab";

const HeaderContainer = () => {
  const [isModalActive, setModalActive] = useState(false);
  const onClick = useCallback(() => {
    setModalActive(!isModalActive);
  }, [isModalActive]);
  return (
    <>
      <DefaultHeader onClick={onClick} />
      {isModalActive && (
        <Portal>
          <Tab onClick={onClick} />
        </Portal>
      )}
    </>
  );
};

export default HeaderContainer;
