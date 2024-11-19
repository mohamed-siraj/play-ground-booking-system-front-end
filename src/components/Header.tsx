import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {

    const [name, setName] = useState(null);
    const [type, setType] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const na: any = localStorage.getItem('admin_name');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ty: any = localStorage.getItem('admin_type');

        if (na) {
            setName(na);
        }

        if (ty) {
            setType(ty);
        }
    }, [])

    const router = useRouter();

    useEffect(() => {
        const admin_type = localStorage.getItem('admin_type');
        if (admin_type === 'SUPER_ADMIN') {
            router.push('/admin'); //
        }
        if (admin_type === 'GROUND_ADMIN') {
            router.push('/ground-admin'); //
        }
    }, [router])

    return (<>
        <header>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Reserve dot com</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>{name ? name : 'Guest Account'}</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    {
                                        name ? <><li><a onClick={() => {
                                            if (type === 'SUPER_ADMIN') {
                                                router.push('/admin'); //
                                            }
                                            if (type === 'GROUND_ADMIN') {
                                                router.push('/ground-admin'); //
                                            }
                                        }}>Dashboard</a></li><li><a onClick={() => {
                                            localStorage.clear();
                                            router.push('/'); //
                                        }}>Logout</a></li></> : <li><Link href="/login">Log-in</Link></li>
                                    }


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