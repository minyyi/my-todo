import { styled } from "styled-components";
import img1 from "../../asset/img1.webp";

const Top = () => {
  return (
    <Div id="section1">
      <ImgDiv>
        <DivP>
          <P>just Do it!</P>
        </DivP>
      </ImgDiv>
    </Div>
  );
};
export default Top;

const Div = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
`;

const ImgDiv = styled.div`
  background-image: url(${img1});
  background-size: 100% 100%;

  height: 100%;
  width: 100vw;
`;

const DivP = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 70px;
`;
