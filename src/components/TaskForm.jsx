import React, { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

const TaskForm = () => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const {createTask}=useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    createTask({
        title,
        description
    });
    setTitle("");
    setDescription("");
  };

  return (
   <div className="max-w-md mx-auto ">
     <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 
      rounded-md
      flex flex-col gap-4   

     ">
      <h1 className="
      text-2xl font-bold text-center text-white mb-4
      ">Crea tu tarea </h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-900 text-white p-2 rounded-md mb-4"
     />
      <textarea
      placeholder="Escribe una description"
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      className="bg-slate-900 text-white p-2 rounded-md mb-4"
      >
      </textarea>

      <button 
      className=" self-start   bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-400 
        md:self-end text-white 
      "
      >Agregar</button>
    </form>
   </div>
  );
};

export default TaskForm;
