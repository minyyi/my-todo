import Top from "../component/Home/Top.jsx";
import AddTask from "../component/Home/AddTask.jsx";
import RecentTodo from "../component/Home/RecentTodo.jsx";
import MyTodo from "../component/Home/MyTodo.jsx";
import Done from "../component/Home/Done.jsx";
import { useNavigate } from "react-router-dom";

const Home = ({ todos, setTodos, checkedToggle, handleRemove }) => {
  const navigate = useNavigate();

  const clickCard = (id, aaa) => {
    navigate(`/detail/${id}`, { state: aaa });
  };

  return (
    <>
      <Top />
      <AddTask setTodos={setTodos} />
      <RecentTodo
        // todos={todos}
        // onRemoveClick={handleRemove}
        // onDoneClick={checkedToggle}
        clickCard={clickCard}
      />
      <MyTodo
        // todos={todos}
        // onRemoveClick={handleRemove}
        // onDoneClick={checkedToggle}
        clickCard={clickCard}
      />
      <Done
        // todos={todos}
        // onRemoveClick={handleRemove}
        // checkedToggle={checkedToggle}
        clickCard={clickCard}
      />
    </>
  );
};
export default Home;
