import Nav from "./Nav"

const Header = (props) => {

    console.log (props.mensaje)

    return (
        <header>
            <h1 className="brand">Mercado mi Encargo</h1>
            <p>{props.mensaje}</p>
            <Nav
            inHeader={true}
            cosasParaMostrar={["Link1","Link2","Link3"]}
            laClase="navbar-header"
            />
        </header>
    )
}

export default Header