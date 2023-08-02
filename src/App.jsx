import Layout from "./component/Layout";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <AddTask />
        <AddTask />
        <AddTask />
      </Layout>
    </>
  );
}

export default App;
