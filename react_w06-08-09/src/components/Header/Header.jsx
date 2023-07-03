import './Header.css';
import logo from '../../_assets/images/logo.png';

function Header () {

    return (
        <div className='fluid-container'>
            <nav className='container'>
                <div className='logo'>
                <span><img src={logo}/></span>
               </div>
               <ul>
                <li><a href='#'>Guitarras</a></li>
                <li><a href='#'>Serviços</a></li>
                <li><a href='#'>Contato</a></li>
                                               
               </ul>
            </nav>
          </div>
    
    ) 
    
}

export default Header;
