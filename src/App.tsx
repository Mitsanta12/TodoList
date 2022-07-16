import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITask} from './Interfaces';


const App: FC = () => {

  const [task, setTask] = useState <string>("");
  const [deadline, setDeadline] = useState <number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  /*ggg*/
  const handeleChange = (event : ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value));
    } 
  };

  /**Ajout des todo list */
  const addTask = (): void =>{
    const newTask = { taskName: task, deadline: deadline};
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
  }


  /*fonction pour supprimer une liste*/
  const completeTask = (taskNameToDelete: string): void =>{
      setTodoList(todoList.filter((task) => {
        return task.taskName != taskNameToDelete
      }))
  }

  return (
    <div className="App">
        <div className='header'>
          <div className="inputContainer">
              <input type="text"
               placeholder='task...'
               name='task' 
               value={task}
               onChange={handeleChange} />


              <input type="number"
                     name='deadline' 
                     placeholder='Deadline  (in days)...'
                     value={deadline}
                     onChange={handeleChange} />
          </div>  
              <button onClick ={addTask}>Ajouter</button>
          
        </div>
        <div className='todoList'>
          {todoList.map((task: ITask, key: number)=> {
            return<TodoTask key={key} task={task} completeTask={completeTask}/>;
          })}
        </div>
    </div>
  );
}

export default App;
