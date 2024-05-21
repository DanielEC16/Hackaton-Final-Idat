import "./Products.scss";
import { useEffect, useState } from "react";
import { products as productos } from "./../mocks/products.json"; // Cambié el nombre de la importación a "productos" para ser más claro

export const Products = () => {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const delay= (ms) => new Promise((resolve) => setTimeout(resolve,ms ))
      setLoader(true);
      try {
        setProd(productos);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-products">
        {loader && <p>Cargando</p>}
        {error && <p>Error con la petición</p>}
        {prod.map((producto) => (
          <div key={producto.id} className="card">
            <div className="imagen">
              <img src={producto.image} alt={producto.title} />
            </div>
            <div className="info">
              <h3>{producto.title}</h3>
              <p className="desc-prod">
                {producto.descripcion || "No hay descripción"}
              </p>
              <span className="price">{producto.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
