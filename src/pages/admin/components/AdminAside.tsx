

const AdminAside = () => {
    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <a>Bookings</a>
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
                <a>Customers</a>
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
                    <summary>Games Type</summary>
                    <ul>
                        <li><a>Games Types</a></li>
                        <li><a>Game Type Create</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </>);
};

export default AdminAside;