'use client';

import Head from "next/head";
import { useEffect } from 'react';
import Booking from "@/components/booking/Booking";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setBooking } from "@/state/slices/BookingReducer";
import { GetAllBooking } from "@/axios/useApi";
import CustomersAdminFooter from "../components/CustomersAdminFooter";
import CustomersAdminAside from "../components/CustomersAdminAside";
import CustomersAdminHeader from "../components/GroundAdminHeader";

const AdminBooking = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.booking);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user_id: any = localStorage.getItem('user_id');
        GetAllBooking('', user_id).then((data) => dispatch(setBooking(data.success)));
    },[dispatch])
    return (<>
        <CustomersAdminHeader />
        <Head>
            <title>Admin Bookings</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                <CustomersAdminAside />
                </aside>
            </div>


            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <Booking data={data}/>
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
        <CustomersAdminFooter />
    </>);
};

export default AdminBooking;