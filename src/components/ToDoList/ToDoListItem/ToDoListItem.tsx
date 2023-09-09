import s from './style.module.scss'
import cn from 'classnames'
import { ToDo } from '../../../models/todoItems'

interface ComponentProps {
    toDoItem: ToDo,
    deleteToDo: Function,
    updateToDo: Function
}

export const ToDoListItem = ({ toDoItem, deleteToDo, updateToDo }: ComponentProps) => {
    return (
        <li className={s.todoItemWrapper}>
            <span>{toDoItem.text}</span>
            <div className={s.todoButtons}>
                <button
                    className={cn(s.trash, s.button)}
                    onClick={() => deleteToDo(toDoItem)}
                ></button>
                <button
                    className={cn(toDoItem.isDone ? s.check : s.uncheck, s.button)}
                    onClick={() => updateToDo(toDoItem)}
                ></button>
            </div>
        </li>
    )
}