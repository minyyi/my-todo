import { styled } from "styled-components";
import img2 from "../asset/img2.webp";

export default function ReactTodo() {
  return (
    <>
      <Container>
        <InnerBox>
          <TextDiv>
            <TitleDiv>
              <Title>Todo</Title>
            </TitleDiv>
            <Hr></Hr>
            <div>
              <P>
                The About page is the core description of your website. Here is
                where you let clients know what your website is about. You can
                edit all of this text and replace it with what you want to
                write. For example you can let them know how long you have been
                in business, what makes your company special, what are its core
                values and more.
              </P>
              {/* <br /> */}
              <P>
                Edit your About page from the Pages tab by clicking the edit
                button.
              </P>
            </div>
          </TextDiv>
          <ImgDiv></ImgDiv>
        </InnerBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 40px 50px;
`;
const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 30px auto;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
const ImgDiv = styled.div`
  display: flex;
  width: 538px;
  height: 440px;
  background-image: url(${img2});
  background-size: 100% 100%;
`;
const TitleDiv = styled.div``;
const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Hr = styled.hr`
  width: 120px;
  border: 3px solid #c07848;
  margin: 10px 0;
`;

const P = styled.p`
  font-size: 20px;
`;
