import React from 'react'
import logo from './logo.svg';
import './App.css';
import {
  getAllTasks,
  getAllTasksNew
} from './core/api/api';

class App extends React.Component {
  componentDidMount() {
    const getAllTasksThunk=async()=>{
      const allTasks=await getAllTasks()
      console.log(allTasks)
    }

    // так тоже работает
    // раньше не работало потому что перед getAllTasks() должен был стоять await т.к. функция getAllTasks() возвращает нам промис 
    // несмотря на все awaitы внутри нее
    getAllTasksThunk()
    
    // так работает
    getAllTasks().then(data=>console.log(data))

    // так не работает потому что перед getAllTasks() должен был стоять await т.к. функция getAllTasks() возвращает нам промис 
    // несмотря на все awaitы внутри нее
    const tasks=getAllTasks()
    console.log(tasks)
  }
  render() {

    return ( 
      <div>toDoLIst</div>
    )
  }
}

export default App;
