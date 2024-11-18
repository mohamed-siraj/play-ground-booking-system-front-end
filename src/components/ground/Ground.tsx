
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRouter } from 'next/router';
import { DeleteUsers } from "@/axios/useApi";
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]; // Define the type for the function prop
};

const Grounds = ({ data }: ChildComponentProps) => {
    const router = useRouter();
    const edit = (id: number) => {
        router.push(`/ground-admin/ground/edit/${id}`); //
    };

    const deleteData = async (id: number) => {
        await DeleteUsers(id)
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
                                <td>{data.email}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.address}</td>
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