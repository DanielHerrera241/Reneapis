import axios from "axios";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const { id } = params;
  const usuario = await getUsuario(id);

  return (
    <div >
      <center>
      <h1>Información del Usuario</h1>
      <table className="table">
        <tbody>
          <tr>
            <td><strong>Id:</strong></td>
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
          <tr>
            <td><strong>Dirección:</strong></td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Calle:</strong></td>
                    <td>{usuario.address.street}</td>
                  </tr>
                  <tr>
                    <td><strong>Suite:</strong></td>
                    <td>{usuario.address.suite}</td>
                  </tr>
                  <tr>
                    <td><strong>Ciudad:</strong></td>
                    <td>{usuario.address.city}</td>
                  </tr>
                  <tr>
                    <td><strong>Código Postal:</strong></td>
                    <td>{usuario.address.zipcode}</td>
                  </tr>
                  <tr>
                    <td><strong>Geo:</strong></td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td><strong>Latitud:</strong></td>
                            <td>{usuario.address.geo.lat}</td>
                          </tr>
                          <tr>
                            <td><strong>Longitud:</strong></td>
                            <td>{usuario.address.geo.lng}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td><strong>Compañía:</strong></td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Nombre:</strong></td>
                    <td>{usuario.company.name}</td>
                  </tr>
                  <tr>
                    <td><strong>Eslogan:</strong></td>
                    <td>{usuario.company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <td><strong>BS:</strong></td>
                    <td>{usuario.company.bs}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </center>
    </div>
  );
}