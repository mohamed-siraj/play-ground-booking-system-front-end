
import { useState } from "react";
import { GrView } from "react-icons/gr";
import BookingView from "./BookingView";

type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]; // Define the type for the function prop
};

const Booking = ({ data }: ChildComponentProps) => {

    const [value, setValue] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };

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
                {
                    data.map((value) => {
                        return (<>
                            <tr>
                                <td>{value?.booking_id}</td>
                                <td>{value?.ground_id?.name}</td>
                                <td>{value?.guest_name}</td>
                                <td>{value?.guest_phone_number}</td>
                                <td>{value.booking_date_from} {value.booking_date_to}</td>
                                <td>Rs.{value.total_amount}</td>
                                <td>
                                    <div className="inline-flex gap-2"><GrView onClick={()=>{setValue(value);toggleModal();}} /></div>
                                </td>
                            </tr>
                        </>)
                    })
                }

            </tbody>
        </table>
        {
            isOpen && <BookingView value={value} toggleModal={toggleModal} />
        }

    </>);
}

export default Booking;