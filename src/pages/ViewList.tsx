import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todoItems"
import { RootState } from "../store"


export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    return (
        <>
            {
                todoList.map((todo: ToDo) => {
                    return (<ListItem todo={todo} key={todo.id} />)
                })
            }
        </>
    )
}