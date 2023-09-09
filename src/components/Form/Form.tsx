import { SyntheticEvent, useState } from 'react'
import s from './style.module.scss'

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('')

    const formSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        if (text) {
            props.createNewToDo(text)
            setText('')
        }
    }

    return (
        <div className={s.formWrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={text}
                        className={s.input} type="text"
                        onChange={e => setText(e.target.value)}
                    />
                    <button className={s.button}></button>
                </label>
            </form>
        </div>
    )
}