import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todoItems"


export const ViewList = ({ todoList }: { todoList: ToDo[] }) => {
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