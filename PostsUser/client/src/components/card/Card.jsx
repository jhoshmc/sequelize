// import image from "../../assets/paisaje2.jpg";
const Card = ({ post, users }) => {
  const { title, texto, createdAt, image } = post;
  //* a mejorar
  const fecha = new Date(createdAt);
  const dia = fecha.getUTCDate();
  const mes = fecha.getUTCMonth() + 1; // Se agrega 1 porque los meses en JavaScript van de 0 a 11
  const anio = fecha.getUTCFullYear();
  // Formatear la fecha en el formato deseado
  const fechaFormateada = dia + " - " + mes + " - " + anio;
  //* d----
  // const found = users.find((usuario) => (usuario.id = post.id));
  // console.log(found);

  return (
    <div className="card flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg">
      {!image ? "" : <img src={image} alt="nombre" height="300" width="400" />}
      <div className="card-details flex flex-col justify-between">
        <div className="top flex flex-row justify-between mx-4 font-semibold text-gray-500">
          <div className="usuario">#algo </div>
          <div className="date">{fechaFormateada}</div>
        </div>
        <div className="middle mx-2">
          <h2 className="title text-2xl font-bold">{title}</h2>
          <p className="excerpt">{texto}</p>
        </div>
        <div className="flex justify-between mx-2 text-sky-600">
          <p className="autor mx-2 font-bold">@user{}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
