import { FiEdit } from "react-icons/fi";
import { useRouter } from 'next/router';
import { MdOutlineDeleteForever } from "react-icons/md";
import { DeleteLocation } from "@/axios/useApi";
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
};

const LocationList = ({ data }: ChildComponentProps) => {

    const router = useRouter();
    
    const edit = (id: number) => {
        router.push(`/admin/location/edit/${id}`); //
    };

    const deleteData = async (id: number) => {
        await DeleteLocation(id);
        window.location.reload();
    };

    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Location ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data) => {
                        return (<>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>
                                    {/* <div className="inline-flex mr-3"><GrView onClick={toggleModal} /></div> */}
                                    <div className="inline-flex mr-3"><FiEdit onClick={()=> edit(data.id)} /></div>
                                    <div className="inline-flex mr-3"><MdOutlineDeleteForever onClick={()=> deleteData(data.id)} /></div>
                                </td>
                            </tr>
                        </>)
                    })
                }

            </tbody>
        </table>
    </>);
}

export default LocationList;