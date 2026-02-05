export default function Container({children}) {
    return(
        <div className="container">
            <h1>Pondok Tahfizh plus abudzar</h1>
            {children}
            <footer>
                <p>Copyright © 2024 Pondok Tahfizh plus abudzar. All rights reserved</p>
            </footer>
        </div>
    )
}