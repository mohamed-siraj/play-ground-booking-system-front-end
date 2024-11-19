'use client';

import Head from "next/head";
import AdminAside from "../components/AdminAside";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import { useEffect } from 'react';
import Link from 'next/link';
import GameType from "@/components/game-type/GameType";
import { useDispatch, useSelector } from "react-redux";
import { GetAllGameType } from "@/axios/useApi";
import { setGameType } from "@/state/slices/GameTypeReducer";
import { RootState } from "@/state/store";

const AdminGameType = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.gameType);

    useEffect(() => {
        GetAllGameType().then((data) => dispatch(setGameType(data.success)));
    },[dispatch])
    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Game Type</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>


            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="text-right"><Link className="link link-warning" href="/admin/game-type/create"><button className="btn btn-warning mb-3">Create Game Type</button></Link></div>
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <GameType data={data}/>
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

export default AdminGameType;