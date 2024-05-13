import { useReducer } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
export const LearnUseReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });
  return (
    <div>
      <h2>useReducer</h2>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        decrease
      </button>
    </div>
  );
};
