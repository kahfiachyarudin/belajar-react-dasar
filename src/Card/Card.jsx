import "./Card.css";

export default function Card({imageUrl, title = "judul belum disi", desc = "deskripsi belum diisi", ...props}) {
    return (
    <div className="card">
        <img src={imageUrl} alt="gambar-card" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>{props.btn}</button>
    </div>
)
}   