import Layout from "./component/Layout";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import ReactTodo from "./pages/ReactTodo";
import MyTodo from "./pages/MyTodo";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <AddTask />
        <ReactTodo />
        <MyTodo />
      </Layout>
    </>
  );
}

export default App;
