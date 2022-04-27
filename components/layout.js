import Nav from './nav.js'

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            {children}
            <footer>
                <span>Made with 🧡 by Arik Smith</span>
            </footer>
        </>
    )
}
