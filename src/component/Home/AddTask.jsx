import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../RTK/todosSlice";
import { addDoc } from "firebase/firestore";
import { TASK_COLLECTION } from "../../firebase/firebase";

// const rand = (num = 8) => {
//   return Math.random()
//     .toString(36)
//     .substring(2, 2 + num);
// };

export default function AddTask() {
  const [todos, setTodos] = useState({
    // id: rand(),
    title: "",
    description: "",
    done: false,
  });
  const dispatch = useDispatch();

  const addTodos = useSelector((state) => state?.todosSlice);
  useEffect(() => {
    if (addTodos?.error?.message) {
      window.alert(addTodos?.error?.message);
    }
  }, [addTodos?.error?.message]);
  console.log(addTodos);
  // const clickAddTodo = (name, message) => {
  //   dispatch(add(name, message));
  //   console.log("투두추가");
  //   setForms({
  //     name: "",
  //     message: "",
  //   });
  // };

  // const handleFormData = (e) => {
  //   let { name, value } = e.target;
  //   console.log({ name, value });
  //   setForms((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  // console.log(setForm);

  const onChange = (e) => {
    console.log(e);
    let { name, value } = e.target;
    console.log({ name, value });
    setTodos((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const clickAddTodo = async ({ title, description, done }) => {
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (description === "") {
      alert("내용을 입력해주세요");
      return;
    }

    try {
      dispatch(addTodo({ title, description, done }));

      setTodos({
        // id: rand(),
        title: "",
        description: "",
        done: false,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // const clickAddTodo = ({ id, title, description, done }) => {
  //   console.log("ADD", { id, title, description, done });
  //   dispatch(addTodo({ id, title, description, done }));
  //   if (todos?.title === "") {
  //     alert("제목을 입력해주세요");
  //   } else if (todos?.description === "") {
  //     alert("내용을 입력해주세요");
  //   } else {
  //     setTodos({
  //       id: rand(),
  //       title: "",
  //       description: "",
  //       done: false,
  //     });
  //     // setId((id) => id + 1);
  //   }
  // };
  console.log(TASK_COLLECTION);
  console.log(todos);
  console.log(typeof addTodos?.loading);

  return (
    <>
      <Container id="section2">
        <InnerContainer>
          <Title>add task</Title>
          <Hr />
          <InputDiv>
            <Seoul>Seoul, South Korea</Seoul>
            <Input
              name="title"
              type="text"
              placeholder="Name"
              value={todos?.title}
              onChange={onChange}
            ></Input>
            <InputMsg
              name="description"
              type="text"
              placeholder="Message"
              value={todos?.description}
              onChange={onChange}
            ></InputMsg>
          </InputDiv>
          <Button
            disabled={addTodos?.loading === "pending"}
            type="submit"
            onClick={() =>
              clickAddTodo({
                // id: todos?.id,
                title: todos?.title,
                description: todos?.description,
                done: todos?.done,
              })
            }
          >
            Add todo
          </Button>
          {/* <p>{addTodos?.loading === "pending" ? "로딩중" : "완료"}</p> */}
        </InnerContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #f2e3d9;
  min-height: 500px;
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

const InnerContainer = styled.div`
  max-width: 800px;
`;

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 30px;
`;

const Hr = styled.hr`
  width: 50px;
  border-color: #c07848;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Seoul = styled.p`
  margin: 10px;
`;
const Input = styled.input`
  width: 700px;
  height: 50px;
  padding-left: 10px;
  margin-top: 5px;
  box-sizing: border-box;

  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #d4d7e5;
  &:focus-within {
    outline: none;
  }
`;
const InputMsg = styled.input`
  width: 700px;
  height: 100px;
  padding-left: 10px;
  box-sizing: border-box;

  margin-bottom: 13px;
  border-radius: 5px;
  border: 1px solid #d4d7e5;
  &:focus-within {
    outline: none;
  }
`;

const Button = styled.button`
  width: 700px;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${(props) => {
    console.log(props.disabled);
    if (props.disabled) {
      console.log("red들어옴!!");
      return "red";
    }
    return "white";
  }};
  /* background-color: red; */
  border-radius: 5px;
  border: 1px solid #c07848;
  &:hover {
    cursor: pointer;
  }
`;
