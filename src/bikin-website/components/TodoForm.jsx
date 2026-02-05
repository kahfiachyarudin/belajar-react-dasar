function TodoForm({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Masukkan tugas..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onAdd}>Tambah</button>
    </div>
  );
}

export default TodoForm;
