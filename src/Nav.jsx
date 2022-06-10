/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = (inHeader,cosasParaMostrar,laClase) =>{

    if (inHeader){

        return(
            <nav className={laClase}>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </nav>
        )
    }
    else {
        return(
            <nav className={laClase}>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
            </nav>
        )
    }
    }

export default Nav