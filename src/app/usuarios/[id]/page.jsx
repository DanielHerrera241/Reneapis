import axios from "axios";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const { id } = params;

  // Llamamos la función para obtener los datos del usuario
  const usuario = await getUsuario(id);

  return (
    <div>
      <center>
        <h1>Información del Usuario</h1>
        <table border="1" cellPadding="5">
          <tbody>
            {/* Mostramos los datos del usuario */}
            <tr>
              <td><strong>ID:</strong></td>
              <td>{usuario.id}</td>
            </tr>
            <tr>
              <td><strong>Nombre:</strong></td>
              <td>{usuario.name}</td>
            </tr>
            <tr>
              <td><strong>Usuario:</strong></td>
              <td>{usuario.username}</td>
            </tr>
            <tr>
              <td><strong>Correo:</strong></td>
              <td>{usuario.email}</td>
            </tr>
            <tr>
              <td><strong>Teléfono:</strong></td>
              <td>{usuario.phone}</td>
            </tr>
            <tr>
              <td><strong>Website:</strong></td>
              <td>{usuario.website}</td>
            </tr>

            {/* Sección de dirección */}
            <tr>
              <td><strong>Dirección:</strong></td>
              <td>
                Calle: {usuario.address.street}, Suite: {usuario.address.suite}, 
                Ciudad: {usuario.address.city}, Código Postal: {usuario.address.zipcode}
              </td>
            </tr>
            <tr>
              <td><strong>Geolocalización:</strong></td>
              <td>
                Latitud: {usuario.address.geo.lat}, Longitud: {usuario.address.geo.lng}
              </td>
            </tr>

            {/* Información de la compañía */}
            <tr>
              <td><strong>Compañía:</strong></td>
              <td>
                Nombre: {usuario.company.name}, Eslogan: {usuario.company.catchPhrase}, 
                Especialidad: {usuario.company.bs}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}
