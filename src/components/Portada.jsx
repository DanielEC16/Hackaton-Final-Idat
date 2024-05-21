import "./Portada.scss";

export const Portada = () => {
  const handleVideoEnd = () => {
    console.log("Video has ended");
    // Aquí puedes manejar cualquier lógica después de que el video termine
  };
  return (
    <>
      <div className="banner">
        <img src="./Banner.gif" alt="" className="portada"/>
        <p className="text">tecnology</p>
      </div>
    </>
  );
};
