import { Link } from "react-router-dom"
import { ToDo } from "../../models/todoItems"
import s from './style.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <Link
            className={`${s.link} ${todo.isDone ? s.done : s.notDone}`}
            // target="_blank"
            // rel="noreferrer"
            to={`/list/${todo.id}`}
        >{todo.text}</Link>
    )
}