import { CrudContext } from "../../context/crudContext";
import { useContext, useState } from "react";
import { Formulario } from "./components/formulario";

export default function CrudPage() {
  const { crud, addItem, removeItem, updateItem } = useContext(CrudContext);

  const [user, setUser] = useState({ id: null, name: "", username: "" });

  const editRow = (item) => {
    setUser({ id: item.id, name: item.name, username: item.username });
  };

  return (
    <div className="container">
      <h1>CRUD</h1>

      <Formulario addItem={addItem} />

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crud.length <= 0 ? (
            <div className="alert alert-danger">
              <strong className="text-white">Oh no!</strong> There are no users
              yet.
            </div>
          ) : (
            crud.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    value={user.id === item.id ? user.name : item.name}
                    onChange={(e) =>
                      editRow({
                        id: item.id,
                        name: e.target.value,
                        username: item.username,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={user.id === item.id ? user.username : item.username}
                    onChange={(e) =>
                      editRow({
                        id: item.id,
                        name: item.name,
                        username: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateItem(user)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
