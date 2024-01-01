import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async () => {
//   return;
// });

export const addTodo = createAsyncThunk(
  "ADD",
  //fetch
  async ({ id, title, description, done }) => {
    return { id, title, description, done };
  }
);
export const removeTodo = createAsyncThunk(
  "REMOVE",
  //fetch
  async (id) => {
    return id;
  }
);

// export const addTodoAsync =
//   ({ id, title, description, done }) =>
//   async (dispatch) => {
//     console.log("todos", { id, title, description, done });
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log("res", data);
//     dispatch(add({ id, title, description, done }));
//     console.log("addTodoAsync", addTodoAsync);
//   };

export const getFetchAsync = () => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  dispatch(get(data));
  console.log(data);
};

export const removeAsync = (id) => async (dispatch) => {
  console.log("aync", id);
  await dispatch(remove(id));
};
export const completeTodoAsync = (id) => async (dispatch) => {
  await dispatch(toggle(id));
};
const initialState = {
  entities: { todos: [], fetchData: [] },
  loading: "idle",
  currentRequestId: "",
};

const todosSlice = createSlice({
  name: "todosRtk",
  initialState,
  reducers: {
    add(state, action) {
      console.log("add", { state: current(state), action });
      state?.entities?.todos?.unshift(action?.payload);
    },

    // add: (state, action) => {
    //   console.log("add", { state: current(state), action });
    //   return {
    //     ...state,
    //     todos: [action?.payload, ...state?.todos],
    //   };
    // },
    remove(state, action) {
      console.log("remove", { state: current(state), action });
      const newTodos = state?.entities?.todos?.filter(
        (todo) => todo.id !== action?.payload
      );
      state.entities.todos = newTodos;
    },
    toggle(state, action) {
      const newTodos = state?.entities?.todos?.map((todo) =>
        todo?.id === action?.payload ? { ...todo, done: !todo?.done } : todo
      );
      state.entities.todos = newTodos;
    },
    get(state, action) {
      console.log("get", { state: current(state), action });
      state.entities.fetchData = action.payload;
    },
  },
  extraReducers: {
    [addTodo.pending]: (state, action) => {
      console.log("pending1", { state: current(state), action });
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
      console.log("pending", { state: current(state), action });
    },
    [addTodo.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.entities.todos.push(action.payload);
        state.currentRequestId = undefined;
      }
      console.log("fulfilled", {
        state: current(state),
        action,
        requestId,
      });
    },
    [addTodo.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
    [removeTodo.pending]: (state, action) => {
      console.log("pending1", { state: current(state), action });
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
      console.log("pending", { state: current(state), action });
    },
    [removeTodo.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        console.log("remove", current(state.entities.todos));
        state.entities.todos = state.entities.todos.filter(
          (todo) => todo.id !== action.payload
        );
        state.currentRequestId = undefined;
      }
      console.log("fulfilled", {
        state: current(state),
        action,
        requestId,
      });
    },
    [removeTodo.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const { add, remove, toggle, get } = todosSlice.actions;
//store에서 add, remove, complte 액션을 내보낸다.
export default todosSlice.reducer;
