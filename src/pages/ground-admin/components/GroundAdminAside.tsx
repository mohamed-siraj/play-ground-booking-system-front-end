

const GroundAdminAside = () => {
    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <a>Bookings</a>
            </li>
            <li>
                <details open>
                    <summary>Grounds</summary>
                    <ul>
                        <li><a>Grounds</a></li>
                        <li><a>Ground Create</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </>);
};

export default GroundAdminAside;