import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import cn from 'classnames'
import s from './style.module.scss'
import { ToDo } from "../../models/todoItems"


export const ToDoList = (props: { todos: ToDo[], deleteToDo: Function, updateToDo: Function }) => {

    const checkedList = () => {
        return props.todos
            .filter((i: ToDo) => i.isDone)
            .map((i, idx) => <ToDoListItem
                toDoItem={i}
                key={idx}
                updateToDo={props.updateToDo}
                deleteToDo={props.deleteToDo}
            />)
    }

    const unCheckedList = () => {
        return props.todos
            .filter((i: ToDo) => !i.isDone)
            .map((i, idx) => <ToDoListItem
                toDoItem={i}
                key={idx}
                updateToDo={props.updateToDo}
                deleteToDo={props.deleteToDo}
            />)
    }

    return (
        <div className={s.todoContainer}>
            <ul className={cn(s.todoList, s.failed)}>
                {unCheckedList()}
            </ul>
            <ul className={cn(s.todoList, s.completed)}>
                {checkedList()}
            </ul>
        </div>
    )
}