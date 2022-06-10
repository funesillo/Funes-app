import Header from "./Header";
import NavBar from "./components/NavBar";
import Footer from "./Footer";
import ItemCount from "./components/ItemCount";

const App = () => {
    
    return(
        <>
        <Header mensaje="Buenos Dias"/>
        <NavBar mensaje="Elija su Link"/>
        <main>
            <h2>Home</h2>
        </main>
        <ItemCount/>
        <div>
            <Footer/>
        </div>
        </>
    )
};



export default App