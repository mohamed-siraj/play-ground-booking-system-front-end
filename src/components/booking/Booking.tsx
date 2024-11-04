
import { GrView } from "react-icons/gr";

type ChildComponentProps = {
    toggleModal: () => void; // Define the type for the function prop
};

const Booking = ({ toggleModal }: ChildComponentProps) => {

    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Ground</th>
                    <th>Guest Name</th>
                    <th>Guest Contact No</th>
                    <th>Booking Period</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>100/</td>
                    <td>
                        <div className="inline-flex gap-2"><GrView onClick={toggleModal} /></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>);
}

export default Booking;