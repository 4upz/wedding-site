import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/story">
                        <a>Our Story</a>
                    </Link>
                </li>
                <li>
                    <Link href="/bridal-party">
                        <a>Bridal Party</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
