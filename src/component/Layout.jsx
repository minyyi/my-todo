import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
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
          <Tab1>
            <Logo onClick={clicktoHome}>My task</Logo>
          </Tab1>

          <Tab2>
            <P onClick={clicktoHome}>Home</P>
            <P onClick={clickAddButton}>ADD Task</P>
            <P onClick={clickReactButton}>React Todo</P>
            <P onClick={clickMy}>My Todo</P>
          </Tab2>
        </NavBar>
      </Appbar>
      <Body>
        <BodyDiv>{children}</BodyDiv>
      </Body>
      <Footer>
        <Div1>
          <p style={{ fontSize: "1.2rem", margin: "0" }}>My task</p>
          <p style={{ fontSize: "0.8rem", margin: "0" }}>
            Copyright © 2023 All rights reserved
          </p>
          <InnerDiv>
            <p style={{ fontSize: "0.8rem", margin: "0" }}>Powered By </p>
            <a
              href="https://www.site123.com"
              style={{
                fontSize: "0.8rem",
                color: "#c07848",
                margin: "0",
                marginLeft: "4px",
              }}
            >
              SITE123
            </a>{" "}
            <span style={{ fontSize: "0.8rem", margin: "0 2px" }}>-</span>
            <a
              href="https://www.site123.com"
              style={{ fontSize: "0.8rem", color: "#c07848", margin: "0" }}
            >
              Create your own website
            </a>
          </InnerDiv>
        </Div1>
        <Div2>
          <FooterP onClick={clicktoHome}>Home</FooterP>
          <FooterP onClick={clickAddButton}>ADD Task</FooterP>
          <FooterP onClick={clickReactButton}>React Todo</FooterP>
          <FooterP onClick={clickMy}>My Todo</FooterP>
        </Div2>
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
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;

const Tab1 = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #f2e3d9;
    opacity: 0.8;
  }
`;
const Tab2 = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  text-align: center;
`;

const Logo = styled.p`
  font-family: var(--font_logo), "Open Sans", Arial, sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  color: #f2e3d9;
  opacity: 1;
  letter-spacing: 3px;
  text-align: center;
`;

const P = styled.p`
  color: #f2e3d9;
  opacity: 0.8;
  font-size: 20px;
  font-family: var(--font_menu), "Open Sans", Arial, sans-serif;
  &:hover {
    cursor: pointer;
    color: #f2e3d9;
    opacity: 1;
  }
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
  padding: 40px 0 100px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  background-color: #fff;
  border: 3px solid black;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const InnerDiv = styled.div`
  display: flex;
`;
const Div2 = styled.div`
  display: flex;
  text-align: right;
`;
const FooterP = styled.p`
  color: black;
  margin: 0 10px;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  opacity: 1;
  &:hover {
    cursor: pointer;
    color: #c07848;
    opacity: 1;
  }
`;
