import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  //DONE - add new task if it's not empty
  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    if (newTaskTitle) setTasks([...tasks, newTask]);
  };

  //DONE - mark task as done if exists
  function handleMarkTaskAsDone(id: number) {
    const taskToDo = tasks.find(task => task.id === id);
    if (!!taskToDo) {
      taskToDo.done === true ? taskToDo.done = false : taskToDo.done = true;
      const oldTasks = tasks.filter(task => task.id !== id);
      setTasks([...oldTasks, taskToDo])
    }
  }

  //DONE - remove task from state
  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}