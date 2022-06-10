import Nav from "./Nav"

const Footer = () =>{    
    
    return(
        <footer>
            <p>copyright &copy;</p>
            <Nav
            inHeader = {false}
            cosasParaMostrar={["facebook","instagram"]}/>
        </footer>
    )
}

export default Footer