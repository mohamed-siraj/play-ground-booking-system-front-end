import Link from 'next/link';

const Header = () => {
    return (<>
        <header>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Reserve dot com</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Mohamed Siraj</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Logout</a></li>
                                    <li><Link href="/login">Log-in</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    </>)
}
export default Header;