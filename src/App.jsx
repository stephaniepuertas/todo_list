import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  //define state
  const [allTasks, setAllTasks] = useState([])

  //add new task
  const addNewTask = (newTask) => {
    setAllTasks([newTask, ...allTasks])
  }
  //delete a task
  const deleteTask = (index) => {
    console.log(index)
    // will use splice method or filter
    const filteredTasks = allTasks.filter((task, idx) => index !== idx)
    setAllTasks(filteredTasks)
  }
  // add check box
  const checkbox = (targetIndex) => {
    const newTodos = allTasks.map((task, idx) => {
      if(targetIndex === idx){
        task.isComplete = !task.isComplete
      }
      return task
    })
    setAllTasks(newTodos)
}


  //handler function



  return (
    <fieldset>
      <legend> App.jsx</legend>
    <Form addNewTask={addNewTask} />
    <Display 
      allTasks={allTasks}
      deleteTask = {deleteTask}
      checkbox= {checkbox}
      />
    </fieldset>

  );
}

export default App;
