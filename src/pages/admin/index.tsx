import AdminFooter from "./components/AdminFooter";
import AdminAside from "./components/AdminAside";
import AdminHeader from "./components/AdminHeader";
import Head from "next/head";


const Admin = () => {

    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Dashboard</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>

            <div className="basis-full md:basis-full ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Total Booking</div>
                            <div className="stat-value text-primary">25.6K</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Cancel Booking</div>
                            <div className="stat-value text-secondary">2.6M</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Total Grounds</div>
                            <div className="stat-value text-green">25.6K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AdminFooter />
    </>);
};

export default Admin;