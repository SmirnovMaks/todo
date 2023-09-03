import s from './style.module.scss'

export const Form = () => {
    return (
        <div className={s.formWrapper}>
            <form action="#">
                <label>
                    <input className={s.input} type="text" />
                    <button className={s.button}></button>
                </label>
            </form>
        </div>
    )
}