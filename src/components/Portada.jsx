import { Link } from 'react-router-dom';
import './Portada.scss'

export const Portada = () => {
  return (
    <>
      <div className="banner">
        <div className="text">
          <h2 className="banner-text">Productos en Oferta</h2>
          <Link to='/products' element>
          <button className="banner-button">Ver Ahora</button>
          </Link>
        </div>
        <div className="imagen">
          <img src="https://longdan.co.uk/cdn/shop/files/120491_800x.png?v=1699361951" alt="" className="banner-img" />
        </div>
      </div>
    </>
  );
};
