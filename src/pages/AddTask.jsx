import { styled } from "styled-components";
import { useState } from "react";

export default function AddTask({ setTodos }) {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });
  console.log({ form });
  const handleFormData = (e) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(setForm);

  const clickAdd = () => {
    if (form?.name === "") {
      alert("제목을 입력해주세요");
    } else if (form?.message === "") {
      alert("내용을 입력해주세요");
    } else {
      setTodos((prev) => [form, ...prev]);
      setForm({
        name: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <Title>add task</Title>
          <Hr />
          <InputDiv>
            <Seoul>Seoul, South Korea</Seoul>
            <Input
              name="name"
              placeholder="Name"
              value={form?.name}
              onChange={handleFormData}
            ></Input>
            <InputMsg
              name="message"
              placeholder="Message"
              value={form?.message}
              onChange={handleFormData}
            ></InputMsg>
          </InputDiv>
          <Button type="submit" onClick={clickAdd}>
            Contact us
          </Button>
        </InnerContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #f2e3d9;
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
const Seoul = styled.p``;
const Input = styled.input`
  width: 700px;
  height: 50px;
  padding-left: 10px;
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
  background-color: #c07848;
  border-radius: 5px;
  border: 1px solid #c07848;
  &:hover {
    cursor: pointer;
  }
`;
