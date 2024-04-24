import { useState, useEffect } from 'react';

import { fetchToDoList } from '../../taskApi/task.api.js';
import AddTaskForm from '../AddTaskForm/AddTaskForm.jsx';
import Header from '../Header/Header.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import Footer from '../Footer/Footer.jsx';

import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const refreshToDoList = () => {
    const taskPromise = fetchToDoList();
    taskPromise
      .then((response) => {
        console.log('SERVER DATA:', response);
        setToDoList(response.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  //initial load of component
  useEffect(() => {
    console.log('Lets get productive');
    refreshToDoList();
  }, []);

  return (
    <div className='App'>
      <Header title="To do list" />
      <main>
        <AddTaskForm toDoListRefreshCallback={refreshToDoList} />
        <ToDoList
          toDoList={toDoList}
          toDoRefreshCallback={refreshToDoList}
        />
      </main>
      <Footer toDoListRefreshCallback={refreshToDoList} />
    </div>


  );
}

export default App;
