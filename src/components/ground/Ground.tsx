
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRouter } from 'next/router';
import { DeleteGround } from "@/axios/useApi";
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]; // Define the type for the function prop
};

const Grounds = ({ data }: ChildComponentProps) => {
    const router = useRouter();
    const edit = (id: number) => {
        const admin_type = localStorage.getItem('admin_type');
        if(admin_type === 'GROUND_ADMIN'){
            router.push(`/ground-admin/ground/edit/${id}`); //
        }else{
            router.push(`/admin/ground/edit/${id}`); //
        }
    };

    const deleteData = async (id: number) => {
        await DeleteGround(id)
        window.location.reload();
    };


    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Game Type</th>
                    <th>Location</th>
                    <th>Level</th>
                    <th>Surrounding</th>
                    <th>Per Day Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data) => {
                        return (<>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data?.game_type_id?.type}</td>
                                <td>{data?.location_id?.name}</td>
                                <td>{data.level}</td>
                                <td>{data.surrounding}</td>
                                <td>Rs. {data.per_day_price}</td>
                                <td>
                                    <div className="inline-flex mr-3"><FiEdit onClick={() => edit(data.id)} /></div>
                                    <div className="inline-flex mr-3"><MdOutlineDeleteForever onClick={() => deleteData(data.id)} /></div>
                                </td>
                            </tr>
                        </>)
                    })
                }

            </tbody>
        </table>
    </>);
}

export default Grounds;