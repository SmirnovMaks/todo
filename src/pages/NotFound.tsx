import { Link } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const NotFound = () => {
    return (

        <>
            <Header></Header>
            <h1>404</h1>
            <Link to='/list'>to home</Link>
        </>
    )
}