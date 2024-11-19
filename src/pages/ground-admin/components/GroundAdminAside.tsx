import Link from 'next/link'

const GroundAdminAside = () => {
    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <Link href="/ground-admin/bookings">Bookings</Link>
            </li>
            <li>
                <details open>
                    <summary>Grounds</summary>
                    <ul>
                        <li><Link href="/ground-admin/ground">Grounds</Link></li>
                        <li><Link href="/ground-admin/ground/create">Ground Create</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link href="/ground-admin/messages">Messages</Link></li>
        </ul>
    </>);
};

export default GroundAdminAside;