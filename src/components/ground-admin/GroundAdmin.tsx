
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
type ChildComponentProps = {
    toggleModal: () => void; // Define the type for the function prop
};

const GroundAdmin = ({ toggleModal }: ChildComponentProps) => {

    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12/16/2020</td>
                    <td>100/</td>
                    <td>12/16/2020</td>
                    <td>100/</td>
                    <td>
                        <div className="inline-flex mr-3"><GrView onClick={toggleModal} /></div>
                        <div className="inline-flex mr-3"><FiEdit onClick={toggleModal} /></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>);
}

export default GroundAdmin;