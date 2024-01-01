import { styled } from "styled-components";
import img2 from "../../asset/img2.webp";
import { useSelector, useDispatch } from "react-redux";
import { removeAsync, completeTodoAsync } from "../../RTK/todosSlice";

const CardComponent = ({ todo, onRemove, onDoneClick, clickCard }) => {
  return (
    <>
      <CardDiv>
        <Card>
          <ImgDiv onClick={clickCard}></ImgDiv>
          <CardTitle>{todo?.title}</CardTitle>
          <P>{todo?.description}</P>
          <More>Read More </More>
          <ButtonDiv>
            <Button onClick={() => onRemove(todo?.id)}>삭제</Button>
            <Button onClick={() => onDoneClick(todo?.id)}>다시</Button>
          </ButtonDiv>
        </Card>
      </CardDiv>
    </>
  );
};

const Done = ({ clickCard }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state?.todosSlice);
  console.log(todos);
  const onRemove = (id) => {
    dispatch(removeAsync(id));
    console.log("삭제");
  };
  const onDoneClick = (id) => {
    dispatch(completeTodoAsync(id));
    console.log("완료");
  };

  const isDoneArray = todos?.entities?.todos?.filter(
    (todo) => todo?.done === true
  );
  console.log({ isDoneArray });

  return (
    <>
      <Container>
        <TitleDiv>
          <Title> Done list</Title>
        </TitleDiv>
        <Hr />
        {isDoneArray?.length > 0 ? (
          <InnerBox>
            {isDoneArray?.map((todo) => {
              return (
                <CardComponent
                  key={todo?.id}
                  todo={todo}
                  onRemove={onRemove}
                  onDoneClick={onDoneClick}
                  clickCard={clickCard}
                />
              );
            })}
          </InnerBox>
        ) : (
          <p>완료한 항목이 없습니다.</p>
        )}
      </Container>
    </>
  );
};

export default Done;

const Container = styled.div`
  min-height: 500px;

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
  background-color: #f2e3d9;
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
  background-color: #fff;
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
