import Link from 'next/link'

const CustomersAdminAside = () => {
    return (<>
        <ul className="menu bg-[#214157] text-white h-screen text-lg">
            <li>
                <Link href="/customers/bookings">Bookings</Link>
            </li>
        </ul>
    </>);
};

export default CustomersAdminAside;