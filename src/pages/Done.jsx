import { styled } from "styled-components";
import img2 from "../asset/img2.webp";

const MyTodo = () => {
  return (
    <>
      <Container>
        <InnerBox>
          <TitleDiv>
            <Title> Done list</Title>
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
  background-color: #f2e3d9;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ImgDiv = styled.div`
  width: 310px;
  height: 180px;
  margin: 15px auto;
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
  margin: 15px 12px;
`;

const P = styled.p`
  font-size: 18px;
  margin: 15px 12px;
  color: gray;
`;

const More = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #c07848;
  opacity: 0.8;
  margin: 15px 12px 30px;
`;
