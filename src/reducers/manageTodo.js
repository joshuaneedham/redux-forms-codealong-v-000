export default function manageTodo(state = {
  todos: [
    { test: 'buy groceries' },
    { text: 'watch netflix' }
  ],
}, action) {

  // console.log("reducer received this action:", action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.concat(action.payload.text)
      }
    default:
      return state;
  }

  return state;
}
