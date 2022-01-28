import React from 'react';
import { connect } from 'react-redux';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  deleteTodo: typeof deleteTodo;
  fetchTodos: Function; // workaround -> use type Function for Thunk actions
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  _onButtonClick = (): void => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  };

  _renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this._onClickDelete(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  _onClickDelete(id: number): void {
    this.props.deleteTodo(id);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this._onButtonClick}>
          Fetch
        </button>
        {this.state.fetching ? 'LOADING' : null}
        {this._renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { deleteTodo, fetchTodos })(_App);
