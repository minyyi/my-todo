import Layout from "./component/Layout";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const [todos, setTodos] = useState([]);
  console.log({ todos });

  const checkedToggle = (id) => {
    let newArray = [...todos]?.map((todo) =>
      todo?.id === id ? { ...todo, isDone: !todo?.isDone } : todo
    );
    setTodos(newArray);
    console.log(id);
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    console.log({ remove: todos });
  };

  console.log({ last: todos });

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                // todos={todos}
                // setTodos={setTodos}
                // checkedToggle={checkedToggle}
                // handleRemove={handleRemove}
                />
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Detail
                  todos={todos}
                  checkedToggle={checkedToggle}
                  handleRemove={handleRemove}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
