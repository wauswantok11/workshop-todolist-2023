import React from 'react'
import "./TodoList.css"
import TodoItem from "./TodoItem/TodoItem"

function TodoList(pops) {
    console.log('pops', pops)
    const todoList = pops.todoList;

  return (
    <div className='tdl-container'>
        <TodoList task={todoList[0].task} isFinished={todoList[0].isFinished} dueDate={todoList[0].dueDate}></TodoList>
        <TodoList task={todoList[1].task} isFinished={todoList[0].isFinished} dueDate={todoList[0].dueDate}></TodoList>
        <TodoList task={todoList[2].task} isFinished={todoList[0].isFinished} dueDate={todoList[0].dueDate}></TodoList>
        <TodoList task={todoList[3].task} isFinished={todoList[0].isFinished} dueDate={todoList[0].dueDate}></TodoList>

    </div>
  )
}

export default TodoList
