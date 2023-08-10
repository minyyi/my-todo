import { styled } from "styled-components";
import img2 from "../asset/img2.webp";
import { useState } from "react";

const MyTodo = () => {
  return (
    <>
      <Container>
        <InnerBox>
          <TitleDiv>
            <Title> My Todo</Title>
          </TitleDiv>
          <Hr />
          <CardDiv>
            <Card>
              <ImgDiv></ImgDiv>
              <CardTitle href="/">
                10 RULES TO BUILD A WILDLY SUCCESSFUL BUSINESS
              </CardTitle>
              <P>
                This is a generic blog article you can use for adding blog
                content / subjects on your website. You can edit all of this
                text and replace it with anything you have to say on your blog.
              </P>
              <More>Read More </More>
              <Delete
              // className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
              // onClick={() => {
              //   deleteCard(value);
              // }}
              >
                삭제
              </Delete>
            </Card>
            <Card>
              <ImgDiv></ImgDiv>
              <CardTitle href="/">9 STEPS TO STARTING A BUSINESS</CardTitle>
              <P>
                This is a generic blog article you can use for adding blog
                content / subjects on your website. You can edit all of this
                text and replace it with anything you have to say on your blog.{" "}
              </P>
              <More>Read More </More>
            </Card>
            <Card>
              <ImgDiv></ImgDiv>
              <CardTitle href="/">
                7 BIG THINGS A START-UP MUST HAVE TO SUCCEED
              </CardTitle>
              <P>
                This is a generic blog article you can use for adding blog
                content / subjects on your website. You can edit all of this
                text and replace it with anything you have to say on your blog.{" "}
              </P>
              <More>Read More </More>
            </Card>
          </CardDiv>
        </InnerBox>
      </Container>
    </>
  );
};

export default MyTodo;

const Container = styled.div`
  background-color: #f2e3d9;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px;
`;
const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px auto;
`;
const CardDiv = styled.div`
  display: flex;
  gap: 30px;
`;
const Card = styled.div`
  width: 340px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;
const ImgDiv = styled.div`
  width: 310px;
  height: 180px;
  background-image: url(${img2});
  background-size: 100% 100%;
  border-radius: 10px;
`;
const TitleDiv = styled.div`
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 35px;
  margin-bottom: 7px;
`;
const Hr = styled.hr`
  width: 40px;
  border: 1px solid #c07848;
  margin-bottom: 10px;
`;

const CardTitle = styled.a`
  font-size: 20px;
  font-weight: 900;
  color: #c07848;
  margin: 15px 0;
`;

const P = styled.p`
  font-size: 18px;
  margin: 15px 0;
  color: gray;
`;

const More = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #c07848;
  opacity: 0.8;
  margin: 15px 0s;
`;

const Delete = styled.button`
  width: 50px;
  padding: 3px;
  background-color: #f2e3d9;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #c07848;
  }
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: #c07848;
  }
`;
