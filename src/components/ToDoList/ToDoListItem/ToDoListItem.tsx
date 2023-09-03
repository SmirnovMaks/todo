import s from './style.module.scss'
import cn from 'classnames'

export const ToDoListItem = () => {
    return (
        <li className={s.todoItemWrapper}>
            <span>Первая задача</span>
            <div className={s.todoButtons}>
                <button className={cn(s.trash, s.button)}></button>
                <button className={cn(s.check, s.button)}></button>
            </div>
        </li>
    )
}