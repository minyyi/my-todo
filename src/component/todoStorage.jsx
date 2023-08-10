export const saveTodos = ({ todos }) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const loadTodos = () => {
  const todosString = localStorage.getItem("todos");

  console.log(todosString);

  if (!todosString) {
    return [];
  }

  try {
    return JSON.parse(todosString);
  } catch (e) {
    console.error(e);
    return [];
  }
};
