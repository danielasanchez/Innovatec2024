import logo from '../logo.svg';

function Header(){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Películas
        </header>
    )
}

export default Header;