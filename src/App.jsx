import Layout from "./component/Layout";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import ReactTodo from "./pages/ReactTodo";
import MyTodo from "./pages/MyTodo";
import { useState, useEffect, useHistory } from "react";
import Done from "./pages/Done";

function App() {
  const [todos, setTodos] = useState([]);
  console.log({ todos });

  const handleTodos = () => {
    setTodos(todos);
  };
  // const saveTodos = {
  //   name: "",
  //   message: "",
  // };
  // console.log(save);
  localStorage.setItem("todos", JSON.stringify());
  localStorage.getItem("todos");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      setTodos(saved);
    }
  }, []);
  //   const save = localStorage.getItem(saveTodos);
  //   localStorage.setItem(saveTodos, []);
  //   console.log(save);
  // });

  return (
    <>
      <Layout>
        <Home />
        <AddTask setTodos={setTodos} onTextChange={handleTodos} />
        <ReactTodo todos={todos} />
        <MyTodo todos={todos} />
        <Done />
      </Layout>
    </>
  );
}

export default App;
