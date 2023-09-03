import s from './style.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <a className={s.link} href="/">ToDo</a>
            </div>
        </header>
    )
}