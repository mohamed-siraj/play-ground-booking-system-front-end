'use client';

import Head from "next/head";
import AdminAside from "../components/AdminAside";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { GetAllMessage } from "@/axios/useApi";
import { setMessages } from "@/state/slices/MessagesReducer";
import MessagesList from "@/components/messages/Message";

const AdminMessage = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.messages);

    useEffect(() => {
        GetAllMessage('').then((data) => dispatch(setMessages(data.success)));
    },[dispatch])
    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Messages</title>
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
                            <MessagesList data={data}/>
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

export default AdminMessage;