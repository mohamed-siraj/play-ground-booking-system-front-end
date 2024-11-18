
// import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { useRouter } from 'next/router';
import { MdOutlineDeleteForever } from "react-icons/md";
import { DeleteGameType } from "@/axios/useApi";
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
};

const GameType = ({ data }: ChildComponentProps) => {
    const router = useRouter();
    
    const edit = (id: number) => {
        router.push(`/admin/game-type/edit/${id}`); //
    };

    const deleteData = async (id: number) => {
        await DeleteGameType(id)
        window.location.reload();
    };

    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Game Type ID</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data) => {
                        return (<>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.type}</td>
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

export default GameType;
