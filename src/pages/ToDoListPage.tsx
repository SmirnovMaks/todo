import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todoItems"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, updateAction } from "../features/todoList"

export const ToDoListPage = () => {

    const [todos, setTodos] = useState<ToDo[]>([])
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter(todo => todo.id !== toDoItem.id)
        setTodos(newToDos)
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}