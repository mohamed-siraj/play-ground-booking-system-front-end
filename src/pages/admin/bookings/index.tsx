'use client';

import Head from "next/head";
import AdminAside from "../components/AdminAside";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import BookingView from "@/components/booking/BookingView";
import { useState } from 'react';
import Booking from "@/components/booking/Booking";
import Link from 'next/link';

const AdminBooking = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };


    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Bookings</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>


            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="text-right"><Link className="link link-warning" href="/admin/bookings/create"><button className="btn btn-warning mb-3">Create Admin</button></Link></div>
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <Booking toggleModal={toggleModal}/>
                        </div>
                    </div>
                    {/* <div className="grid justify-items-end mt-2">
                        <div className="join grid grid-cols-2">
                            <button className="join-item btn btn-outline">Previous page</button>
                            <button className="join-item btn btn-outline">Next</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        {
            isOpen && <BookingView toggleModal={toggleModal} />
        }

        <AdminFooter />
    </>);
};

export default AdminBooking;