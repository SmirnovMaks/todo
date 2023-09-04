import s from './style.module.scss'
import cn from 'classnames'
import { ToDo } from '../../../models/todoItems'

export const ToDoListItem = (props: { toDoItem: ToDo, deleteToDo: Function, updateToDo: Function }) => {
    return (
        <li className={s.todoItemWrapper}>
            <span>{props.toDoItem.text}</span>
            <div className={s.todoButtons}>
                <button
                    className={cn(s.trash, s.button)}
                    onClick={() => props.deleteToDo(props.toDoItem)}
                ></button>
                <button
                    className={cn(props.toDoItem.isDone ? s.check : s.uncheck, s.button)}
                    onClick={() => props.updateToDo(props.toDoItem)}
                ></button>
            </div>
        </li>
    )
}