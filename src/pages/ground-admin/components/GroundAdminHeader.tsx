'use client'

import { useEffect, useState } from 'react';
import AdminAside from './GroundAdminAside';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GroundAdminHeader = () => {

    const [name, setName] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const na: any = localStorage.getItem('admin_name');

        if (na) {
            setName(na);
        }

    }, [])


    const router = useRouter();

    useEffect(() => {
        const admin_type = localStorage.getItem('admin_type');
        if (admin_type === 'SUPER_ADMIN') {
            router.push('/admin'); //
        }
    }, [router])

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (<>
        <header>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Ground Admin Dashboard</a>
                </div>
                <div className="flex-none">
                    <label className="visible md:invisible lg:invisible xl:invisible btn btn-circle swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={toggleMenu} />

                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>{name ? name : 'Guest Account'}</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><Link href="/ground-admin">Home Screen</Link></li>
                                    <li><a onClick={() => {
                                        localStorage.clear();
                                        router.push('/'); //
                                    }}>Logout</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative">

                {/* Side menu */}
                <div
                    className={`fixed w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <AdminAside />
                </div>
            </div>
        </header>

    </>)
}
export default GroundAdminHeader;