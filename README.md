# useMemo
The useMemo hook is used to memoize the result of a function, so that the function is only executed when necessary. It takes two arguments: the function to be memoized, and an array of dependencies that determines when the memoized value should be recomputed.

**useMemo** is useful when you have expensive computations in your component that you don't want to execute unnecessarily. By memoizing the result of the computation, you can ensure that it is only executed when the input data has changed.

# useReducer
The useReducer hook is used to manage complex state changes in a React component. It takes a reducer function and an initial state, and returns the current state and a dispatch function that can be used to update the state.

**useReducer** is useful when you have state changes that are too complex to manage with simple useState hooks. By using a reducer function, you can manage more complex state changes in a more organized way.