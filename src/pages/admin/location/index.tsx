'use client';

import Head from "next/head";
import AdminAside from "../components/AdminAside";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import { useEffect } from 'react';
import Link from 'next/link';
import LocationList from "@/components/location/Location";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setLocation } from "@/state/slices/LocationReducer";
import { GetAllLocation } from "@/axios/useApi";

const AdminLocation = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.location);

    useEffect(() => {
        GetAllLocation().then((data) => dispatch(setLocation(data.success)));
    },[dispatch])

    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Location</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>


            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="text-right"><Link className="link link-warning" href="/admin/location/create"><button className="btn btn-warning mb-3">Create Location</button></Link></div>
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <LocationList data={data}/>
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
        <AdminFooter />
    </>);
};

export default AdminLocation;