'use client';

import Head from "next/head";
import AdminAside from "../components/AdminAside";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import { GrView } from "react-icons/gr";
import BookingView from "@/components/BookingView";
import { useState } from 'react';

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
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <table className="table table-md">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Ground</th>
                                        <th>Guest Name</th>
                                        <th>Guest Contact No</th>
                                        <th>Booking Period</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Littel, Schaden and Vandervort</td>
                                        <td>Canada</td>
                                        <td>12/16/2020</td>
                                        <td>100/</td>
                                        <td>
                                            <div className="inline-flex gap-2"><GrView onClick={toggleModal} /></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="grid justify-items-end mt-2">
                        <div className="join grid grid-cols-2">
                            <button className="join-item btn btn-outline">Previous page</button>
                            <button className="join-item btn btn-outline">Next</button>
                        </div>
                    </div>
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