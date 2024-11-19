'use client';

import Head from "next/head";
import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { GetAllGround } from "@/axios/useApi";
import GroundAdminHeader from "../components/GroundAdminHeader";
import GroundAdminAside from "../components/GroundAdminAside";
import GroundAdminFooter from "../components/GroundAdminFooter";
import Grounds from "@/components/ground/Ground";
import { setGround } from "@/state/slices/GroundReducer";

const Ground = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.ground);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user_id: any = localStorage.getItem('user_id');
        GetAllGround(user_id).then((data) => dispatch(setGround(data.success)));
    }, [dispatch])

    return (<>
        <GroundAdminHeader />
        <Head>
            <title>Grounds</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <GroundAdminAside />
                </aside>
            </div>


            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="text-right"><Link className="link link-warning" href="/ground-admin/ground/create"><button className="btn btn-warning mb-3">Create Ground</button></Link></div>
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <Grounds data={data} />
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
        <GroundAdminFooter />
    </>);
};

export default Ground;