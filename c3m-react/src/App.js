import {BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom'

import HeaderButton from './Components/HeaderButton.js'
import Home from './Components/Home.js'
import Empresa from './Components/Empresa.js'
import Footer from './Components/Footer.js'
import './Styles.css';

function App() {
    return(
        <Router>
            <div className = "Page">
                <div className = "Header">
                    <HeaderButton link = "./" conteudo = "Home"/>
                    <HeaderButton link = "./Empresa" conteudo = "Empresa"/>
                </div>

                <Switch>
                    <Route exact path = "/" element = {<Home/>}/>
                    <Route path = "/Empresa" element = {<Empresa/>}/>
                </Switch>

                <Footer/>
            </div>    
        </Router>
    );
}

export default App;