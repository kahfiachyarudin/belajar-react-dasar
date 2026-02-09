export default function DataSiswa({ siswa, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{siswa.nama}</td>
      <td>{siswa.umur}</td>
      <td>{siswa.kelas}</td>
      <td>
        <button onClick={() => onEdit(siswa.id)}>Edit</button>
        <button onClick={() => onDelete(siswa.id)}>Delete</button>
      </td>
    </tr>
  );
}