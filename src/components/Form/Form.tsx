import { SyntheticEvent } from 'react'
import s from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { formValueAction } from '../../features/form'

export const Form = (props: { createNewToDo: Function }) => {

    const value = useSelector((state: RootState) => state.formValue.value)
    const dispatch = useDispatch()

    const formSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        if (value) {
            props.createNewToDo(value)
            dispatch(formValueAction(''))
        }
    }

    return (
        <div className={s.formWrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={value}
                        className={s.input}
                        type="text"
                        onChange={(e) => dispatch(formValueAction(e.target.value))}
                    />
                    <button className={s.button}></button>
                </label>
            </form>
        </div>
    )
}