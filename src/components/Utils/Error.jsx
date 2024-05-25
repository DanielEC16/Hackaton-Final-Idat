import './Error.scss'
export const Error = ({message}) => {
  return (
    <div className="error-container">
      <p className="error-message">Error al Cargar los Datos <br /> Intentelo de nuevo mas tarde 😃</p>
    </div>
  );
};
