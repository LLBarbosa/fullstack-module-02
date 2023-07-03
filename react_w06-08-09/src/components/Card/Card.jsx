import './Card.css';
import Button from '../Button/Button';
import logoGuitarGibson from '../../_assets/images/logoGuitarGibson.jpg';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';


function Card (props) {
  return (
    <div className='card-principal'>
      <div className='card-image'>
        <figure>
        <img src={logoGuitarGibson} width="100%" alt="Guitarra Gibson Les Paul"/>
        </figure>



      </div>

      <div className='card-description'>
        <div className='card-description-info'>
          <h3 className='title-product'>GUITARRA</h3>
          <p>{props.nome} {props.id}</p>
          <p>Descricão: {props.descricao}</p>
          {/* <p>Características: {caracteristicas}</p> */}
          <p>Valor: {props.valor}</p>
            
          
          <div className='card-description-topics'>
          
          <ul class='icon'>
            <li><FaStar class='icon'  /> Corpo/braço em mogno (mahogany)</li>
            <li><FaStar class='icon' /> 02 Humbuckers</li>
            <li><FaStar class='icon' /> Escala em pau-ferro </li>
            <li><FaStar class='icon' /> Cor 'gold special'</li>
           
          </ul>
          </div>
          <Button/>
         
        </div>
      
      </div>
     
    </div>
       
  )
};

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  // caracteristicas: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
}

export default Card;