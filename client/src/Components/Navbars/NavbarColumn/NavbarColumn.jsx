import style from './NavbarColumn.module.css'

export default function NavbarColumn () {
    return (
    <div className={style.gridContainer}>
        <button>X</button>
        <button>Inicio</button>
        <button>Explorar</button>
        <button>Notificaciones</button>
        <button>Mensajes</button>
        <button>Listas</button>
        <button>Guardados</button>
        <button>Comunidades</button>
        <button>Premium</button>
        <button>Perfil</button>
        <button>Más opciones</button>
        <button>Postear</button>
        <button>Perfil</button>
    </div>)
}