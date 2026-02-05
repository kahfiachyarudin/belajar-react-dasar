function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
