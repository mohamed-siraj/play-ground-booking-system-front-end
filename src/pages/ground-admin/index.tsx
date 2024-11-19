import GroundAdminFooter from "./components/GroundAdminFooter";
import GroundAdminAside from "./components/GroundAdminAside";
import GroundAdminHeader from "./components/GroundAdminHeader";


const GroundAdmin = () => {

    return (<>
        <GroundAdminHeader />
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <GroundAdminAside />
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
        <GroundAdminFooter />
    </>);
};

export default GroundAdmin;