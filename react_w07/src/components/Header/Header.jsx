import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [name, setName] = useState('Clique aqui');

    function changeName() {
        let newName = prompt('Insira o seu nome:');
        if(newName) {
            setName(newName);
        } else {
            setName('Clique aqui');
        }
    }
    return(
        <nav className="navbar bg-primary text-center" data-bs-theme="blue">
            <a className="navbar-brand m-2" href="#" onClick={changeName}>
                Bem-vindo(a), {name}
            </a>
        </nav>
    )
}

export default Header;