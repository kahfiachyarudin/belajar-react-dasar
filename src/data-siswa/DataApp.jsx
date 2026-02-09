import { useState } from "react";
import DataForm from "./DataForm";
import DataTable from "./DataTable";

export default function DataApp() {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAdd = (siswa) => {
    setDataSiswa([...dataSiswa, { ...siswa, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setDataSiswa(dataSiswa.filter((s) => s.id !== id));
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (updatedSiswa) => {
    setDataSiswa(
      dataSiswa.map((s) =>
        s.id === updatedSiswa.id ? updatedSiswa : s
      )
    );
    setEditId(null);
  };

  const siswaYangDiedit = dataSiswa.find((s) => s.id === editId);

  return (
    <div>
      <h2>Data Siswa</h2>

      <DataForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editData={siswaYangDiedit}
      />

      <DataTable
        data={dataSiswa}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
