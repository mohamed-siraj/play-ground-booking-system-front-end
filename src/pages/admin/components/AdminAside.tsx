
'use client'

import Link from 'next/link'

const AdminAside = () => {

    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <Link href="/admin/bookings">Bookings</Link>
            </li>
            <li>
                <a>Grounds</a>
            </li>
            <li>
                <details open>
                    <summary>Ground Admin</summary>
                    <ul>
                        <li><a>Admins</a></li>
                        <li><a>Admin Create</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>Location</summary>
                    <ul>
                        <li><a>Locations</a></li>
                        <li><a>Location Create</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>Game Type</summary>
                    <ul>
                        <li><a>Game Types</a></li>
                        <li><a>Game Type Create</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </>);
};

export default AdminAside;