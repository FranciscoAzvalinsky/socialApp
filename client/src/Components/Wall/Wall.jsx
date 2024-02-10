import style from './Wall.module.css'
import NavbarColumn from '../Navbars/NavbarColumn/NavbarColumn'
import NavbarRow from '../Navbars/NavbarRow/NavbarRow'

export default function Wall () {
    return (
    <div /*className={style.wallContainer}*/>
        <NavbarRow></NavbarRow>
        <NavbarColumn></NavbarColumn>
    </div>)
}