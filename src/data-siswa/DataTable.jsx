import DataSiswa from "./DataSiswa";

export default function DataTable({ data, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Data masih kosong
            </td>
          </tr>
        ) : (
          data.map((siswa, index) => (
            <DataSiswa
              key={siswa.id}
              siswa={siswa}
              index={index}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
