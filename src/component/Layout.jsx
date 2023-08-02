import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
  const navigate = useNavigate();

  const clicktoHome = () => {
    navigate("/");
  };
  const clickAddButton = () => {
    navigate("/add");
  };
  const clickReactButton = () => {
    navigate("/react");
  };
  const clickMy = () => {
    navigate("/my");
  };

  return (
    <Container>
      <Appbar>
        <NavBar>
          <Tab>
            <Logo onClick={clicktoHome}>My task</Logo>
          </Tab>

          <Tab>
            <P onClick={clicktoHome}>Home</P>
            <P onClick={clickAddButton}>ADD Task</P>
            <P onClick={clickReactButton}>React Todo</P>
            <P onClick={clickMy}>My Todo</P>
          </Tab>
        </NavBar>
      </Appbar>
      <Body>
        <BodyDiv>BODY{props.children}</BodyDiv>
      </Body>
      <Footer>
        <Div>
          <p style={{ fontSize: "1.2rem" }}>My task</p>
          <p>Copyright © 2023 All rights reserved</p>
          <p style={{ fontSize: "0.8rem" }}>Powered By</p>
          <a href="https://www.site123.com" style={{ color: "#c07848" }}>
            SITE123
          </a>{" "}
          <span>-</span>
          <a href="https://www.site123.com" style={{ color: "#c07848" }}>
            Create your own website
          </a>
          <Copyright> OTT 2023 All Rights Reserved.</Copyright>
        </Div>
        <Div>
          <FooterP onClick={clicktoHome}>Home</FooterP>
          <FooterP onClick={clickAddButton}>ADD Task</FooterP>
          <FooterP onClick={clickReactButton}>React Todo</FooterP>
          <FooterP onClick={clickMy}>My Todo</FooterP>
        </Div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Appbar = styled.div`
  height: 80px;
  margin: 0;
  background-color: #c07848;
  border-bottom: 1px solid #c07848;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #f2e3d9;
    opacity: 1;
  }
`;

const Logo = styled.p`
  font-family: var(--font_logo), "Open Sans", Arial, sans-serif;
  font-weight: 700;
  font-size: 29px;
  color: #f2e3d9;
  opacity: 0.8;
`;

const P = styled.p`
  color: #f2e3d9;
  font-size: 19px;
  font-family: var(--font_menu), "Open Sans", Arial, sans-serif;
`;

const Body = styled.div`
  flex-grow: 1;
  background-color: white;
`;

const BodyDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Footer = styled.div`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightgray;
  opacity: 0.7;
`;
const Div = styled.div`
  width: 1200px;
  display: flex;
  align-items: space-around;
`;
const FooterP = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
`;
const Copyright = styled.span`
  font-size: 12px;
`;
