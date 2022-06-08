/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from "./CartWidget"

const NavBar = (props) =>{

    console.log (props.mensaje)

    return(

    <nav className="list">
        <CartWidget/>
        <a href="#">{props.mensaje}</a>
        <a href="#">{props.mensaje}</a>
        <a href="#">{props.mensaje}</a>
    </nav>
    )
}

export default NavBar