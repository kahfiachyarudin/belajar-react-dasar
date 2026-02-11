import { useImmerReducer } from "use-immer";
import { DataContext, DataDispatchContext } from "./DataContext";
import DataForm from "./DataForm";
import DataTable from "./DataTable";

let id = 1;

const initialSiswa = [
  { id: id++, nama: "Andi", umur: 16, kelas: "X RPL" },
  { id: id++, nama: "Budi", umur: 17, kelas: "XI RPL" },
  { id: id++, nama: "Caca", umur: 16, kelas: "X RPL" },
  { id: id++, nama: "Deni", umur: 18, kelas: "XII RPL" },
];

function siswaReducer(siswa, action) {
  if (action.type === "ADD_SISWA") {
    siswa.push({
      id: id++,
      nama: action.nama,
      umur: action.umur,
      kelas: action.kelas,
    });
  } 
  else if (action.type === "CHANGE_SISWA") {
    const data = siswa.find((s) => s.id === action.id);
    if (data) {
      data.nama = action.nama;
      data.umur = action.umur;
      data.kelas = action.kelas;
    }
  } 
  else if (action.type === "DELETE_SISWA") {
    const index = siswa.findIndex((s) => s.id === action.id);
    if (index !== -1) siswa.splice(index, 1);
  }
}

export default function DataApp() {
  const [siswa, dispatch] = useImmerReducer(siswaReducer, initialSiswa);

  return (
    <DataContext.Provider value={siswa}>
      <DataDispatchContext.Provider value={dispatch}>
        <div className="app-container">
          <h1>Data Penerimaan Siswa</h1>
          <DataForm />
          <DataTable />
        </div>
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}
