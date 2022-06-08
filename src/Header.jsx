const Header = (props) => {

    console.log (props.mensaje)

    return (
        <header>
            <h1 className="brand">Mercado mi Encargo</h1>
            <p>{props.mensaje}</p>
        </header>
    )
}

export default Header