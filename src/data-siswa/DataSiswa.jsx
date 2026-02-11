import { useState, useContext } from "react";
import { DataDispatchContext } from "./DataContext";

export default function DataSiswa({ siswa, nomor }) {
  const dispatch = useContext(DataDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    nama: siswa.nama,
    umur: siswa.umur,
    kelas: siswa.kelas,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSave() {
    dispatch({
      type: "CHANGE_SISWA",
      id: siswa.id,
      nama: form.nama,
      umur: form.umur,
      kelas: form.kelas,
    });
    setIsEditing(false);
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_SISWA",
      id: siswa.id,
    });
  }

  return (
    <tr>
      <td>{nomor}</td>

      <td>
        {isEditing ? (
          <input name="nama" value={form.nama} onChange={handleChange} />
        ) : (
          siswa.nama
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type="number"
            name="umur"
            value={form.umur}
            onChange={handleChange}
          />
        ) : (
          siswa.umur
        )}
      </td>

      <td>
        {isEditing ? (
          <input name="kelas" value={form.kelas} onChange={handleChange} />
        ) : (
          siswa.kelas
        )}
      </td>

      <td>
        {isEditing ? (
          <button className="table-btn btn-edit" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="table-btn btn-edit"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="table-btn btn-delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
