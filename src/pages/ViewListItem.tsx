import { useEffect, useState } from "react"
import { ToDo } from "../models/todoItems"
import { useNavigate, useParams } from "react-router-dom"

export const ViewListItem = ({ todoList }: { todoList: ToDo[] }) => {



    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todoList.find((todo: ToDo) => String(todo.id) === id)

        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todoList, id, navigate])

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}