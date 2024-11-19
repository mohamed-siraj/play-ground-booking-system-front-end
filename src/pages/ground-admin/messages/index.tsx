'use client';

import Head from "next/head";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { GetAllMessage } from "@/axios/useApi";
import { setMessages } from "@/state/slices/MessagesReducer";
import MessagesList from "@/components/messages/Message";
import GroundAdminFooter from "../components/GroundAdminFooter";
import GroundAdminAside from "../components/GroundAdminAside";
import GroundAdminHeader from "../components/GroundAdminHeader";

const AdminMessage = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.messages);

    useEffect(() => {
        GetAllMessage('').then((data) => dispatch(setMessages(data.success)));
    },[dispatch])
    return (<>
         <GroundAdminHeader />
        <Head>
            <title>Admin Messages</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                <GroundAdminAside />
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
        <GroundAdminFooter />
    </>);
};

export default AdminMessage;