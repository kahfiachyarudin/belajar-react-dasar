import { useState } from 'react';

export default function Tugas(){
    const [inputValue, setInputValue] = useState('');
  const [listNama, setListNama] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListNama([...listNama, inputValue]);
    setInputValue('');
  };
    return (
        <div>
            <h1>Daftar Nama</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Tambah Nama</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {listNama.map((nama, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{nama}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
  