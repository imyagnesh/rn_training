import React, { PureComponent, createRef } from 'react';
import './app.scss';
import TodoFilter from './todo/todoFilter';
import TodoForm from './todo/todoForm';
import TodoList from './todo/todoList';

class App extends PureComponent {
  todoInputRef = createRef(null);

  state = {
    todoList: [],
    filterType: 'all',
    status: [],
  };

  setApiRequest = (requestType, id) => {
    this.setState(({ status }) => ({
      status: [
        ...status,
        { status: `${requestType}_request`, id },
      ],
    }));
  };

  setApiResponse = (requestType, type, id) => {
    this.setState(({ status }) => {
      const index = status.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return {
        status: [
          ...status.slice(0, index),
          { status: `${requestType}_${type}` },
          ...status.slice(index + 1),
        ],
      };
    });
  };

  setIdle = (requestType, id) => {
    this.setState(({ status }) => {
      const index = status.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return {
        status: [
          ...status.slice(0, index),
          ...status.slice(index + 1),
        ],
      };
    });
  };

  componentDidMount = async () => {
    const requestType = 'fetch_todo';
    try {
      this.setApiRequest(requestType);

      const res = await fetch(
        'http://localhost:3000/todoList',
      );
      const json = await res.json();
      this.setState({
        todoList: json,
      });
      this.setApiResponse(requestType, 'success');
    } catch (error) {
      this.setApiResponse(requestType, 'fail');
    } finally {
      this.setIdle(requestType);
    }
  };

  addTodo = async () => {
    const requestType = 'add_todo';
    try {
      this.setApiRequest(requestType);
      const res = await fetch(
        'http://localhost:3000/todoList',
        {
          method: 'POST',
          body: JSON.stringify({
            text: this.todoInputRef.current.value,
            isDone: false,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      const json = await res.json();

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
          filterType: 'all',
          loading: false,
        }),
        () => {
          this.todoInputRef.current.value = '';
        },
      );

      this.setApiResponse(requestType, 'success');
    } catch (error) {
      this.setApiResponse(requestType, 'fail');
    } finally {
      this.setIdle(requestType);
    }
  };

  toggleCompleteTodo = async item => {
    const requestType = 'update_todo';
    try {
      this.setApiRequest(requestType, item.id);
      const res = await fetch(
        `http://localhost:3000/todoList/${item.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            ...item,
            isDone: !item.isDone,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      const json = await res.json();

      const { todoList } = this.state;

      const index = todoList.findIndex(
        x => x.id === item.id,
      );

      this.setState(state => ({
        todoList: [
          ...state.todoList.slice(0, index),
          json,
          ...state.todoList.slice(index + 1),
        ],
        loading: false,
      }));
      this.setApiResponse(requestType, 'success', item.id);
    } catch (error) {
      this.setApiResponse(requestType, 'fail', item.id);
    } finally {
      this.setIdle(requestType, item.id);
    }
  };

  deleteTodo = async item => {
    const requestType = 'delete_todo';
    try {
      this.setApiRequest(requestType, item.id);
      await fetch(
        `http://localhost:3000/todoList/${item.id}`,
        {
          method: 'DELETE',
        },
      );
      this.setState(({ todoList }) => ({
        todoList: todoList.filter(x => x.id !== item.id),
      }));
      this.setApiResponse(requestType, 'success', item.id);
    } catch (error) {
      this.setApiResponse(requestType, 'fail', item.id);
    } finally {
      this.setIdle(requestType, item.id);
    }
  };

  filterTodo = event => {
    this.setState({
      filterType: event.target.name,
    });
  };

  render() {
    const { todoList, filterType, status } = this.state;

    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm
          status={status}
          ref={this.todoInputRef}
          addTodo={this.addTodo}
        />
        {status.some(
          x => x.status === 'fetch_todo_request',
        ) ? (
          <h1>Loading Record...</h1>
        ) : (
          <TodoList
            status={status}
            todoList={todoList}
            filterType={filterType}
            toggleCompleteTodo={this.toggleCompleteTodo}
            deleteTodo={this.deleteTodo}
          />
        )}

        <TodoFilter
          filterType={filterType}
          filterTodo={this.filterTodo}
        />
      </div>
    );
  }
}

export default App;

// life cycle methods

// mounting

// 1. Constructor
// -> 1. based on props define new state value
// -> 2. to make api call (cant set state base on response)
// -> 3. calls only once
// -> 4. bind the methods

// 2. getDerivedStateFromProps

// -> to derived new state base on state and props both
// -> calls everytime when prop or state value change

// 3. render
// -> to render html in dome

// 4. component did mount
// -> on page load get data
// -> to add event listners
// -> to update dom element

// updating

// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate / Inherit PureComponent
// -> to avoid unnessasary rerending base on parent componment update

// 3. render

// 4. getSnapShoptBeforUpdate
// -> take snapshot of UI and pass result to ComponentDidUpdate

// 5. componentDidIUpdate
// -> manipulate the dom base on update

// unmoiunting

// 1. componentWillUnmount
// -> remove eventListenrem, remove interval or timeout, cancel API calls

// error

// 1. GetDerivedStateFromError
// -> derive state value based on error

// 2. componentDidCatch
// log error on server
