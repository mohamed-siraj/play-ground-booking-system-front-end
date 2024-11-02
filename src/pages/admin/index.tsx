import AdminFooter from "./components/AdminFooter";
import AdminAside from "./components/AdminAside";
import AdminHeader from "./components/AdminHeader";


const Admin = () => {

    return (<>
        <AdminHeader />
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>

            <div className="basis-full md:basis-full bg-warning ">asda</div>
        </div>
        <AdminFooter />
    </>);
};

export default Admin;