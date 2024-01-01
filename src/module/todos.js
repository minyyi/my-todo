// const CHANGE_INPUT = "CHANGE_INPUT";
const ADD = "ADD";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3; // ADD 호출 시 1씩 더해진다. id 값은 각 todo 객체가 들고 있게 될 고윳값이다.
export const addTodo = ({ id, title, description }) => {
  console.log({ id, title, description });

  return {
    type: ADD,
    todo: {
      id,
      title,
      description,
      done: false,
    },
  };
};

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = { todos: [] };

function todos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    // case CHANGE_INPUT:
    //   return {
    //     ...state,
    //     input: action.input,
    //   };
    case TOGGLE:
      return {
        ...state,
        todos: state?.todos.map((todo) =>
          todo?.id === action?.id ? { ...todo, done: !todo?.done } : todo
        ),
      };
    case ADD:
      return {
        ...state,
        todos: [action?.todo, ...state?.todos],
      };
    case REMOVE:
      return {
        ...state,
        todos: state?.todos?.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
