import style from './NavbarRight.module.css';

export default function NavbarRight () {
    return (
        <div className={style.gridContainer}>
            <input placeholder='  O    Buscar' className={style.buscador}></input>
            <div className={style.premiumContainer}>
                <h2>Suscríbete a Premium</h2>
                <span>Suscríbete para desbloquear nuevas funciones y, si eres elegible, 
                    recibir un pago de cuota de ingresos por anuncios.
                </span>
                <button>Suscribirse</button>
            </div>
        </div>
    )
}