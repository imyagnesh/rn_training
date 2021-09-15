<<<<<<< HEAD
/*import React, { PureComponent, createRef } from 'react';
=======
import React, {
  PureComponent,
  createRef,
  useState,
  useEffect,
  useRef,
  memo,
} from 'react';
>>>>>>> 8b2d92a3801231080ab00ea27f3347d6ea0b2ed3
import './app.scss';
import TodoFilter from './todo/todoFilter';
import TodoForm from './todo/todoForm';
import TodoList from './todo/todoList';
<<<<<<< HEAD
////
class App extends PureComponent {
  todoInputRef = createRef(null);
=======
import axiosInstance from './utils/axiosInstance';

const _limit = 10;
>>>>>>> 8b2d92a3801231080ab00ea27f3347d6ea0b2ed3

// react.js v > 16.8

const App = ({ initCounter }) => {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [status, setStatus] = useState([]);
  const [page, setPage] = useState(1);
  const todoInputRef = useRef(null);

  const setApiRequest = (requestType, id) => {
    setStatus(val => [
      ...val,
      { status: `${requestType}_request`, id },
    ]);
  };

  const setApiResponse = (requestType, type, id) => {
    setStatus(val => {
      const index = val.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return [
        ...val.slice(0, index),
        { status: `${requestType}_${type}` },
        ...val.slice(index + 1),
      ];
    });
  };

  const setIdle = (requestType, id) => {
    setStatus(val => {
      const index = val.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return [
        ...val.slice(0, index),
        ...val.slice(index + 1),
      ];
    });
  };

  const loadData = async () => {
    const requestType = 'fetch_todo';
    try {
      setApiRequest(requestType);
      let params = {
        _page: page,
        _limit,
      };
      if (filterType !== 'all') {
        params = {
          isDone: filterType === 'completed',
        };
      }
      // get token
      const res = await axiosInstance.get('todoList', {
        params,
      });
      setTodoList(res);
      setApiResponse(requestType, 'success');
    } catch (error) {
      setApiResponse(requestType, 'fail');
    } finally {
      setIdle(requestType);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const addTodo = async () => {
    const requestType = 'add_todo';
    try {
      setApiRequest(requestType);
      const res = await axiosInstance.post('todoList', {
        text: todoInputRef.current.value,
        isDone: false,
      });

      setTodoList(val => [...val, res]);
      setFilterType('all');

      todoInputRef.current.value = '';

      setApiResponse(requestType, 'success');
    } catch (error) {
      setApiResponse(requestType, 'fail');
    } finally {
      setIdle(requestType);
    }
  };

  const toggleCompleteTodo = async () => {};

  const deleteTodo = async () => {};

  const pagination = async () => {};

  const filterTodo = async () => {};

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm
        status={status}
        ref={todoInputRef}
        addTodo={addTodo}
      />
      {status.some(
        x => x.status === 'fetch_todo_request',
      ) ? (
        <h1>Loading Record...</h1>
      ) : (
        <div style={{ width: '100%', flex: 1 }}>
          <button
            type="button"
            name="previous"
            onClick={pagination}>
            Prev
          </button>
          <button
            type="button"
            name="next"
            onClick={pagination}>
            Next
          </button>
          <TodoList
            status={status}
            todoList={todoList}
            filterType={filterType}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
          />
<<<<<<< HEAD
        )}

        <TodoFilter
          filterType={filterType}
          filterTodo={this.filterTodo}
        />
      </div>
    );
  }
}

export default App;*/
=======
        </div>
      )}

      <TodoFilter
        filterType={filterType}
        filterTodo={filterTodo}
      />
    </div>
  );
};

export default memo(App, (prevProp, nextProp) => {
  return true;
});

// class App extends PureComponent {
//   todoInputRef = createRef(null);

//   state = {
//     todoList: [],
//     filterType: 'all',
//     status: [],
//     page: 1,
//   };

//   setApiRequest = (requestType, id) => {
//     this.setState(({ status }) => ({
//       status: [
//         ...status,
//         { status: `${requestType}_request`, id },
//       ],
//     }));
//   };

//   setApiResponse = (requestType, type, id) => {
//     this.setState(({ status }) => {
//       const index = status.findIndex(x => {
//         const [, requestName] =
//           /(.*)_(request|success|fail)/.exec(x.status);
//         if (id) {
//           return requestName === requestType && x.id === id;
//         }
//         return requestName === requestType;
//       });
//       return {
//         status: [
//           ...status.slice(0, index),
//           { status: `${requestType}_${type}` },
//           ...status.slice(index + 1),
//         ],
//       };
//     });
//   };

//   setIdle = (requestType, id) => {
//     this.setState(({ status }) => {
//       const index = status.findIndex(x => {
//         const [, requestName] =
//           /(.*)_(request|success|fail)/.exec(x.status);
//         if (id) {
//           return requestName === requestType && x.id === id;
//         }
//         return requestName === requestType;
//       });
//       return {
//         status: [
//           ...status.slice(0, index),
//           ...status.slice(index + 1),
//         ],
//       };
//     });
//   };

//   componentDidMount = () => {
//     this.loadData();
//   };

//   loadData = async () => {
//     const requestType = 'fetch_todo';
//     try {
//       this.setApiRequest(requestType);

//       const { filterType, page } = this.state;
//       let params = {
//         _page: page,
//         _limit,
//       };
//       if (filterType !== 'all') {
//         params = {
//           isDone: filterType === 'completed',
//         };
//       }

//       // get token

//       const res = await axiosInstance.get('todoList', {
//         params,
//       });

//       this.setState({
//         todoList: res,
//       });
//       this.setApiResponse(requestType, 'success');
//     } catch (error) {
//       this.setApiResponse(requestType, 'fail');
//     } finally {
//       this.setIdle(requestType);
//     }
//   };

//   addTodo = async () => {
//     const requestType = 'add_todo';
//     try {
//       this.setApiRequest(requestType);
//       const res = await axiosInstance.post('todoList', {
//         text: this.todoInputRef.current.value,
//         isDone: false,
//       });

//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, res],
//           filterType: 'all',
//         }),
//         () => {
//           this.todoInputRef.current.value = '';
//         },
//       );

//       this.setApiResponse(requestType, 'success');
//     } catch (error) {
//       this.setApiResponse(requestType, 'fail');
//     } finally {
//       this.setIdle(requestType);
//     }
//   };

//   toggleCompleteTodo = async item => {
//     const requestType = 'update_todo';
//     try {
//       this.setApiRequest(requestType, item.id);
//       const res = await axiosInstance.put(
//         `todoList/${item.id}`,
//         {
//           ...item,
//           isDone: !item.isDone,
//         },
//       );

//       const { todoList } = this.state;

//       const index = todoList.findIndex(
//         x => x.id === item.id,
//       );

//       this.setState(state => ({
//         todoList: [
//           ...state.todoList.slice(0, index),
//           res,
//           ...state.todoList.slice(index + 1),
//         ],
//       }));
//       this.setApiResponse(requestType, 'success', item.id);
//     } catch (error) {
//       this.setApiResponse(requestType, 'fail', item.id);
//     } finally {
//       this.setIdle(requestType, item.id);
//     }
//   };

//   deleteTodo = async item => {
//     const requestType = 'delete_todo';
//     try {
//       this.setApiRequest(requestType, item.id);
//       await axiosInstance.delete(`todoList/${item.id}`);
//       this.setState(({ todoList }) => ({
//         todoList: todoList.filter(x => x.id !== item.id),
//       }));
//       this.setApiResponse(requestType, 'success', item.id);
//     } catch (error) {
//       this.setApiResponse(requestType, 'fail', item.id);
//     } finally {
//       this.setIdle(requestType, item.id);
//     }
//   };

//   filterTodo = event => {
//     this.setState(
//       {
//         filterType: event.target.name,
//       },
//       () => {
//         this.loadData();
//       },
//     );
//   };

//   pagination = async event => {
//     this.setState(
//       ({ page }) => {
//         const btnType = event.target.name;
//         let changedPage = 0;
//         if (btnType === 'previous' && page > 2) {
//           changedPage = page - 1;
//         }
//         if (btnType === 'next') {
//           changedPage = page + 1;
//         }
//         return {
//           page: changedPage,
//         };
//       },
//       () => {
//         this.loadData();
//       },
//     );
//   };

//   render() {
//     const { todoList, filterType, status } = this.state;

//     return (
//       <div className="container">
//         <h1>Todo App</h1>
//         <TodoForm
//           status={status}
//           ref={this.todoInputRef}
//           addTodo={this.addTodo}
//         />
//         {status.some(
//           x => x.status === 'fetch_todo_request',
//         ) ? (
//           <h1>Loading Record...</h1>
//         ) : (
//           <div style={{ width: '100%' }}>
//             <button
//               type="button"
//               name="previous"
//               onClick={this.pagination}>
//               Prev
//             </button>
//             <button
//               type="button"
//               name="next"
//               onClick={this.pagination}>
//               Next
//             </button>
//             <TodoList
//               status={status}
//               todoList={todoList}
//               filterType={filterType}
//               toggleCompleteTodo={this.toggleCompleteTodo}
//               deleteTodo={this.deleteTodo}
//             />
//           </div>
//         )}

//         <TodoFilter
//           filterType={filterType}
//           filterTodo={this.filterTodo}
//         />
//       </div>
//     );
//   }
// }
>>>>>>> 8b2d92a3801231080ab00ea27f3347d6ea0b2ed3

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

// 4. getSnapShoptBeforUpdate // Not possieble in hook
// -> take snapshot of UI and pass result to ComponentDidUpdate

// 5. componentDidIUpdate
// -> manipulate the dom base on update

// unmoiunting

// 1. componentWillUnmount
// -> remove eventListenrem, remove interval or timeout, cancel API calls

// error

// 1. GetDerivedStateFromError // not possible in hook
// -> derive state value based on error

// 2. componentDidCatch // not possible in hook
// log error on server
import React, { PureComponent } from 'react';
import './app.scss';

class App extends PureComponent {
  state = {
    cities: [
      {
        id: new Date().valueOf(),
        name: 'Chennai',
        temp: 35,
      },
      {
        id: new Date().valueOf() + 1,
        name: 'Coimbatore',
        temp: 28,
      },
      {
        id: new Date().valueOf() + 2,
        name: 'Cuddalore',
        temp: 35,
      },
      {
        id: new Date().valueOf() + 3,
        name: 'Erode',
        temp: 37,
      },
      {
        id: new Date().valueOf() + 4,
        name: 'Salem',
        temp: 33,
      },
      {
        id: new Date().valueOf() + 5,
        name: 'Tirunelveli',
        temp: 37,
      },
      {
        id: new Date().valueOf() + 6,
        name: 'Madurai',
        temp: 36,
      },
      {
        id: new Date().valueOf() + 7,
        name: 'Tiruppur',
        temp: 36,
      },
    ],
  };

  onSelectChange = e => {
    const { cities } = this.state;
    const value = e.target.value;
    const city = cities.find(x => x.name === value);
    this.setState({
      weather: `Today's weather in ${city.name} is ${city.temp}°C`,
    });
  };

  render() {
    const { cities, weather } = this.state;

    return (
      <div className="container">
        <h2>Choose a City:</h2>
        <div className="wrapper">
          <select
            name="cities"
            onChange={this.onSelectChange}>
            {cities.map(item => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <button type="button">Check Weather</button>
        </div>
        <span>{weather}</span>
      </div>
    );
  }
}

export default App;