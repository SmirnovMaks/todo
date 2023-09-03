import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import cn from 'classnames'
import s from './style.module.scss'

export const ToDoList = () => {
    return (
        <div className={s.todoContainer}>
            <ul className={cn(s.todoList, s.failed)}>
                <ToDoListItem />
            </ul>
            <ul className={cn(s.todoList, s.completed)}>
                <ToDoListItem />
            </ul>
        </div>
    )
}