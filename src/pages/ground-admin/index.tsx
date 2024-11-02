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

            <div className="basis-full md:basis-full bg-warning ">asda</div>
        </div>
        <GroundAdminFooter />
    </>);
};

export default GroundAdmin;