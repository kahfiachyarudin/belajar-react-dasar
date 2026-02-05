import Card from "../Card/Card.jsx";
import TodoList from "../todo/TodoList.jsx";

export default function HelloWorld() {
    const props = {
        name: "Budi",
    }
    const cardData = {
        imageUrl: "",
        title: "Card dengan spread syntax",
        desc: "ini adalah card menggunakan spread syntax",
        btn: "Card button ini juga dari spread syntax"
    }
    return (
        <>
            <HeaderHelloWorld  {...props}/>
            <ParagraphHelloWorld  description= "Pondok tahfizh plus abu dzar"/>
            <Card {...cardData}/>
            <TodoList />
        </>
    )
}


export function HeaderHelloWorld({desc = "Tamu", ...props}) {
    const text = "Halo, namaku "
    return (
        <h1 style={{
            color: "red",
            backgroundColor: "aqua",
            fontSize: "24px",
        }}>{text} {props.name.toUpperCase()}</h1>
    )
}

export function ParagraphHelloWorld(props) {
    const style = {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        color: "blue",
        backgroundColor: "yellow"
    };
    return (
        <p style={style}>saya sekolah di {props.description.toLowerCase()}</p>
    )
};