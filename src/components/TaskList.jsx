import React,{useContext} from 'react'
import {TaskContext} from '../context/taskContext'

import CardTask from './cardTask'
const TaskList = () => {

  const {tasks}=useContext(TaskContext)
 
  if (tasks.length === 0) {
    return <div className='
    text-center text-white text-2xl font-bold
    '>No hay tareas</div>;
  }
 /**grid responsive */
  return (
    
    <div className='grid grid-cols-1 gap-4 p-4
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    '>
      {tasks.map((task) => (
        <CardTask key={task.id} task={task}  />
      ))}
    </div>
  );
};

export default TaskList;
