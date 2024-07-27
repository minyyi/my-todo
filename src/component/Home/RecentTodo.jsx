import { styled } from "styled-components";
import img2 from "../../asset/img2.webp";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodoAsync } from "../../RTK/todosSlice";

export default function ReactTodo({ clickCard }) {
  // console.log("reacttodo", { todos, length: todos.length });
  // console.log({ index: todos[0] });
  const dispatch = useDispatch();

  const todos = useSelector((state) => state?.todosSlice);
  console.log("recent", todos);
  //모를땐 state먼저 콘솔 찍어서 확인
  const onRemove = (id) => {
    // if (!id) {
    //   //에러처리
    //   return;
    // }
    dispatch(removeTodo(id));
    console.log("삭제");
  };
  const onDoneClick = (id) => {
    dispatch(completeTodoAsync(id));
    console.log("완료");
  };

  // const isProgressArray = todos?.todos?.filter(
  //   (todo) => todo?.isDone === false
  // );

  const firstTodo = todos?.entities?.todos[0];
  // [todos?.entities?.todos?.];
  console.log("firstTodo", firstTodo);

  return (
    <>
      <Container id="section3">
        <TitleDiv>
          <Title>{firstTodo?.title}</Title>
        </TitleDiv>
        <Hr></Hr>
        {firstTodo ? (
          <InnerBox>
            <TextDiv>
              <TextInnerDiv>
                <P>{firstTodo?.description}</P>
              </TextInnerDiv>
              <ButtonDiv>
                <Button onClick={() => onRemove(firstTodo?.id)}>삭제</Button>
                <Button onClick={() => onDoneClick(firstTodo?.id)}>완료</Button>
              </ButtonDiv>
            </TextDiv>
            <ImgDiv onClick={() => clickCard(firstTodo?.id)}></ImgDiv>
          </InnerBox>
        ) : (
          <p>없어요</p>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 500px;
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
const TextInnerDiv = styled.div`
  margin-bottom: 10px;
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
  width: 50px;
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
