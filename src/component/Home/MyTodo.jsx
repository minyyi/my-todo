import { styled } from "styled-components";
import img2 from "../../asset/img2.webp";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  removeTodo,
  completeTodoAsync,
  getFetchAsync,
} from "../../RTK/todosSlice";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const MyTodo = ({ clickCard }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state?.todosSlice);
  const isProgressArray = todos?.entities?.todos?.filter(
    (todo) => todo?.done === false
  );
  console.log(isProgressArray);
  console.log(todos);

  const onRemove = (id) => {
    console.log("id", id);
    dispatch(removeTodo(id));
    console.log("removeTodo", id);
    console.log("삭제");
  };
  const onDoneClick = ({ id, done }) => {
    console.log("클릭마이투두", id, done);

    dispatch(completeTodoAsync({ id, done }));
    console.log("완료");
  };

  useEffect(() => {
    dispatch(getFetchAsync());
  }, []);

  return (
    <>
      <Container id="section4">
        <TitleDiv>
          <Title> My Todo</Title>
        </TitleDiv>
        <Hr />
        {isProgressArray?.length > 0 ? (
          <InnerBox>
            {isProgressArray?.map((todo) => (
              <CardDiv key={todo?.id}>
                <Card>
                  <ImgDiv
                    onClick={() => clickCard(todo?.id, "mytodosection")}
                  ></ImgDiv>
                  <CardTitle>{todo?.title}</CardTitle>
                  <P>{todo?.description}</P>
                  <More>Read More </More>
                  <ButtonDiv>
                    <Button onClick={() => onRemove(todo?.id)}>삭제</Button>
                    <Button
                      onClick={() =>
                        onDoneClick({ id: todo?.id, done: todo?.done })
                      }
                    >
                      완료
                    </Button>
                  </ButtonDiv>
                </Card>
              </CardDiv>
            ))}
          </InnerBox>
        ) : (
          <p>없음</p>
        )}
      </Container>
    </>
  );
};

export default MyTodo;

const Container = styled.div`
  min-height: 500px;

  background-color: #f2e3d9;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px;
`;
const InnerBox = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-content: center;
  gap: 30px;
`;
const CardDiv = styled.div``;
const Card = styled.div`
  width: 340px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
`;

const ImgDiv = styled.div`
  width: 340px;
  height: 180px;
  background-image: url(${img2});
  background-size: 100% 100%;
  border-radius: 10px;
  cursor: pointer;
`;
const TitleDiv = styled.div`
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 35px;
  margin-bottom: 7px;
`;
const Hr = styled.hr`
  width: 80px;
  border: 1px solid #c07848;
  margin-bottom: 20px;
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
  margin: 15px 0;
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
