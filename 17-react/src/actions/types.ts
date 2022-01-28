import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  deleteTodo,
  fetchTodos,
}

export type Action = DeleteTodoAction | FetchTodosAction;
