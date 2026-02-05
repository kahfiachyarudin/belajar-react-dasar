export default function SayHelloForm(){
    return (
        <div>
            <form >
                <input id="name-input" />
                <button onClick={
                    (e) =>{
                        e.preventDefault();
                        const name = document.getElementById("name-input").value;
                        document.getElementById("text_hello").innerText = `Hello, ${name}!`;
                    }
                }>Say hello</button>
            </form>
            <h1 id="text_hello"> Hello World</h1>
        </div>
    );
}