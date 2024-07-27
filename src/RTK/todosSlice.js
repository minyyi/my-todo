import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";
import { TASK_COLLECTION } from "../firebase/firebase";
import {
  // collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const getFetchAsync = createAsyncThunk(
  "todos/getFetchTodos",
  async () => {
    const querySnapshot = await getDocs(TASK_COLLECTION);

    console.log(TASK_COLLECTION);
    console.log(querySnapshot);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

// Add todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async ({ title, description, done }, { rejectWithValue }) => {
    try {
      console.log("addTodo", { title, description, done });
      const docRef = await addDoc(TASK_COLLECTION, {
        title,
        description,
        done,
      });
      console.log("되니");
      return { id: docRef.id, title, description, done };
    } catch (e) {
      return rejectWithValue({
        data: e.response.data,
        status: e.response.status,
        statusText: e.response.statusText,
      });
      // console.error("Error adding document: ", error);
      //상태바꿔서 에러처리
    }
  }
);

// Remove todo
export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  try {
    await deleteDoc(doc(db, "task", id));
    // await dispatch(removeTodo(id));
    console.log("Todo successfully deleted from Firebase and Redux");
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
});

// Toggle todo
export const completeTodoAsync = createAsyncThunk(
  "todos/toggleTodo",
  async ({ id, done }) => {
    console.log("완료", id, done);
    const todoRef = doc(db, "task", id);
    await updateDoc(todoRef, { done: !done });
    return { id, done: !done };
  }
);
export const scrollToSection = createAsyncThunk(
  "scroll/scrollToSection",
  async (sectionId, { rejectWithValue }) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        // element.scrollIntoView({ behavior: "smooth" });
        return sectionId;
      } else {
        throw new Error("Element not found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const addTodo = createAsyncThunk(
//   "ADD",
//   //fetch
//   async ({ id, title, description, done }) => {
//     return { id, title, description, done };
//   }
// );
// export const removeTodo = createAsyncThunk(
//   "REMOVE",
//   //fetch
//   async (id) => {
//     return id;
//   }
// );

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

// export const getFetchAsync = () => async (dispatch) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   dispatch(get(data));
//   console.log(data);
// };

// export const removeAsync = (id) => async (dispatch) => {
//   console.log("aync", id);
//   await dispatch(remove(id));
// };
// export const completeTodoAsync = (id) => async (dispatch) => {
//   await dispatch(toggle(id));
// };
const initialState = {
  entities: { todos: [] },
  loading: "idle",
  error: { states: false, message: "" },
  // currentRequestId: "",
};

const todosSlice = createSlice({
  name: "todosRtk",
  initialState,
  reducers: {},
  // reducers:
  // {
  //   add(state, action) {
  //     console.log("thunk_add", { state: current(state), action });
  //     state?.entities?.todos?.unshift(action?.payload);
  //   },

  //   // add: (state, action) => {
  //   //   console.log("add", { state: current(state), action });
  //   //   return {
  //   //     ...state,
  //   //     todos: [action?.payload, ...state?.todos],
  //   //   };
  //   // },
  //   remove(state, action) {
  //     console.log("remove", { state: current(state), action });
  //     const newTodos = state?.entities?.todos?.filter(
  //       (todo) => todo.id !== action?.payload
  //     );
  //     state.entities.todos = newTodos;
  //   },
  //   toggle(state, action) {
  //     const newTodos = state?.entities?.todos?.map((todo) =>
  //       todo?.id === action?.payload ? { ...todo, done: !todo?.done } : todo
  //     );
  //     state.entities.todos = newTodos;
  //   },
  //   get(state, action) {
  //     console.log("get", { state: current(state), action });
  //     state.entities.fetchData = action.payload;
  //   },
  // },
  // extraReducers: {
  //   [addTodo.pending]: (state, action) => {
  //     console.log("pending1", { state: current(state), action });
  //     if (state.loading === "idle") {
  //       state.loading = "pending";
  //       state.currentRequestId = action.meta.requestId;
  //     }
  //     console.log("pending", { state: current(state), action });
  //   },
  //   [addTodo.fulfilled]: (state, action) => {
  //     const { requestId } = action.meta;
  //     if (state.loading === "pending" && state.currentRequestId === requestId) {
  //       state.loading = "idle";
  //       state.entities.todos.push(action.payload);
  //       state.currentRequestId = undefined;
  //     }
  //     console.log("fulfilled", {
  //       state: current(state),
  //       action,
  //       requestId,
  //     });
  //   },
  //   [addTodo.rejected]: (state, action) => {
  //     const { requestId } = action.meta;
  //     if (state.loading === "pending" && state.currentRequestId === requestId) {
  //       state.loading = "idle";
  //       state.error = action.error;
  //       state.currentRequestId = undefined;
  //     }
  //   },
  //   [removeTodo.pending]: (state, action) => {
  //     console.log("pending1", { state: current(state), action });
  //     if (state.loading === "idle") {
  //       state.loading = "pending";
  //       state.currentRequestId = action.meta.requestId;
  //     }
  //     console.log("pending", { state: current(state), action });
  //   },
  //   [removeTodo.fulfilled]: (state, action) => {
  //     const { requestId } = action.meta;
  //     if (state.loading === "pending" && state.currentRequestId === requestId) {
  //       state.loading = "idle";
  //       console.log("remove", current(state.entities.todos));
  //       state.entities.todos = state.entities.todos.filter(
  //         (todo) => todo.id !== action.payload
  //       );
  //       state.currentRequestId = undefined;
  //     }
  //     console.log("fulfilled", {
  //       state: current(state),
  //       action,
  //       requestId,
  //     });
  //   },
  //   [removeTodo.rejected]: (state, action) => {
  //     const { requestId } = action.meta;
  //     if (state.loading === "pending" && state.currentRequestId === requestId) {
  //       state.loading = "idle";
  //       state.error = action.error;
  //       state.currentRequestId = undefined;
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getFetchAsync.pending, (state) => {
        state.loading = "loading";
      })

      .addCase(getFetchAsync.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities.todos = action.payload;
      })
      .addCase(getFetchAsync.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      })
      .addCase(addTodo.rejected, (state, action) => {
        console.log("rejected", action);
        state.loading = "idle";
        state.error.message = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        console.log("add", { state: current(state), action });
        state.entities.todos.unshift(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.entities.todos = state.entities.todos.filter((todo) => {
          return todo.id !== action.payload?.id;
        });
      })

      .addCase(completeTodoAsync.fulfilled, (state, action) => {
        console.log("Action payload:", action.payload);
        const { id, done } = action.payload;
        state.entities.todos = state.entities.todos
          .map((todo) => {
            console.log(current(todo));
            return todo.id === id ? { ...todo, done: done } : todo;
          })
          .addCase(scrollToSection.pending, (state) => {
            state.status = "loading";
          })
          .addCase(scrollToSection.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.currentSection = action.payload;
          })
          .addCase(scrollToSection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          });
        // const todo = state.entities.todos.find(
        //   (todo) => todo.id === action.payload.id
        // );
        // if (todo) {
        //   todo.done = !todo.done;
        // }
        console.log(state.entities.todos);
        console.log("completeTodo id:", action.payload?.id);
      });
  },
});

// export const { add, remove, toggle, get } = todosSlice.actions;
//store에서 add, remove, complte 액션을 내보낸다.
export default todosSlice.reducer;
