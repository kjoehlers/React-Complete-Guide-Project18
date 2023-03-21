const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "counter/increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "counter/decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "counter/increment" });
store.dispatch({ type: "counter/decrement" });
