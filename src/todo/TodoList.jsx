import Todo from "./Todo";
export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Learn HTML",
            isCompleted: false,
        },
        {
            id: 1,
            text: "Learn CSS",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Learn React",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Learn Tailwind",
            isCompleted: false,
        },
    ]
    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id}{...todo} />
            ))  }
        </ul>
    )
}

