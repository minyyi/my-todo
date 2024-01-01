import { useLocation, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodoAsync } from "../RTK/todosSlice";

import img2 from "../asset/img2.webp";

const Detail = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams(); //{id:asdf}
  const { state } = useLocation();
  //클릭한 카드의 아이디 찾기
  const todos = useSelector((state) => state?.todosSlice);
  const findDetail = todos?.entities?.todos?.find((todo) => todo?.id === id);
  console.log("findDetail", findDetail);

  const navigate = useNavigate();

  const backClick = () => {
    navigate("/");
  };
  const onRemove = (id) => {
    dispatch(removeTodo(id));
    console.log("삭제");
  };
  const onDoneClick = (id) => {
    dispatch(completeTodoAsync(id));
    console.log("완료");
  };

  // const abc = { a: 1, b: 2 };
  // const { a, b } = abc;

  console.log(todos);
  console.log("detail", { state, id });
  return (
    <>
      <Container key={findDetail?.id}>
        <TitleDiv>
          <Title>{findDetail?.title}</Title>
        </TitleDiv>
        <Hr></Hr>
        <InnerBox>
          <TextDiv>
            <div>
              <P>{findDetail?.description}</P>
            </div>
            <ButtonDiv>
              <Button onClick={() => onRemove(findDetail?.id)}>삭제</Button>
              <Button onClick={backClick}>뒤로</Button>
              <Button onClick={() => onDoneClick(findDetail?.id)}>완료</Button>
            </ButtonDiv>
          </TextDiv>
          <ImgDiv></ImgDiv>
        </InnerBox>
      </Container>
      );
    </>
  );
};
export default Detail;

const Container = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  cursor: pointer;
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
const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  min-width: 50px;
  padding: 3px;
  background-color: #f2e3d9;
  border: none;
  border-radius: 5px;
  font-size: 15px;
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
