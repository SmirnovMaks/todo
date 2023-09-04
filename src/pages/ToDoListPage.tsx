import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todoItems"

export const ToDoListPage = () => {

    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newToDos = todos.map(todo => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newToDos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter(todo => todo.id !== toDoItem.id)
        setTodos(newToDos)
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}