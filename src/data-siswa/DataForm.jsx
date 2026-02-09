import { useEffect, useState } from "react";

export default function DataForm({ onAdd, onUpdate, editData }) {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    if (editData) {
      setNama(editData.nama);
      setUmur(editData.umur);
      setKelas(editData.kelas);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !umur || !kelas) return;

    if (editData) {
      onUpdate({ id: editData.id, nama, umur, kelas });
    } else {
      onAdd({ nama, umur, kelas });
    }

    setNama("");
    setUmur("");
    setKelas("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
      />
      <input
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />

      <button type="submit">
        {editData ? "Update" : "Tambah"}
      </button>
    </form>
  );
}
