import styled from "styled-components";

const HeaderHeight = `50px`;

const Main = styled.main`
  padding: 15px;
`;

export const Icon = styled.a`
  position: relative;
  display: inline-block;
  width: 50px;
  padding: 15px;
  cursor: pointer;
`;

export const CommonHeader = styled.header`
  height: ${HeaderHeight};
  background-color: #fff;
`;

export const MainWithFixedHeader = styled(Main)`
  margin-top: ${HeaderHeight};
`;

export const MainWithNormalHeader = styled(Main)``;

export const LinkButton = styled.a`
  display: block;
  height: 50px;
  line-height: 50px;
  border: 1px solid #181818;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #181818;
    border: 1px solid #fff;
    color: #fff;
  }
`;
