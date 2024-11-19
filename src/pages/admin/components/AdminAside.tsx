
'use client'

import Link from 'next/link'

const AdminAside = () => {

    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <Link href="/admin/bookings">Bookings</Link>
            </li>
            <li><Link href="/admin/ground">Grounds</Link></li>
            <li><Link href="/admin/messages">Messages</Link></li>
            <li>
                <details open>
                    <summary>Ground Admin</summary>
                    <ul>
                        <li><Link href="/admin/ground-admin">Admins</Link></li>
                        <li><Link href="/admin/ground-admin/create">Admin Create</Link></li>
                    </ul>
                </details>
            </li>
            <li>
            <Link href="/admin/customers">Customers</Link>
            </li>
            <li>
                <details open>
                    <summary>Location</summary>
                    <ul>
                        <li><Link href="/admin/location">Locations</Link></li>
                        <li><Link href="/admin/location/create">Location Create</Link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>Game Type</summary>
                    <ul>
                        <li><Link href="/admin/game-type">Game Types</Link></li>
                        <li><Link href="/admin/game-type/create">Game Type Create</Link></li>
                    </ul>
                </details>
            </li>
        </ul>
    </>);
};

export default AdminAside;