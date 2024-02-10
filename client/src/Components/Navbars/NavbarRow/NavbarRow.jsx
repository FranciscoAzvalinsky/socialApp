import style from './NavbarRow.module.css'

export default function NavbarRow () {
    return (
    <div className={style.gridContainer}>
        <button>Para ti</button>
        <button>Siguiendo</button>
        <button>x</button>
    </div>)
}