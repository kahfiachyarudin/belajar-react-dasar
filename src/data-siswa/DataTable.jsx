import DataSiswa from "./DataSiswa";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function DataTable() {
  const siswa = useContext(DataContext);

  return (
    <table>
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
        {siswa.map((s, index) => (
          <DataSiswa
            key={s.id}
            siswa={s}
            nomor={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}
