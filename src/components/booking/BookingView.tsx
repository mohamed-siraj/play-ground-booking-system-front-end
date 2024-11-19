
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    toggleModal: () => void; // Define the type for the function prop
};

const BookingView = ({ value, toggleModal }: ChildComponentProps) => {

    return (<>
        <div className="modal modal-open ">
            <div className="modal-box w-11/12 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-4">
                    <h2 className="font-bold text-lg">Booking ID - {value?.booking_id}</h2>
                    <p className="py-4">Booking Period - {value?.booking_date_from} - {value?.booking_date_to}</p>
                    <p className="py-4">Customer Name - {value?.customer_id?.name}</p>
                    <p className="py-4">Customer Address - {value?.customer_id?.address}</p>
                    <p className="py-4">Guest Name - {value?.guest_name}</p>
                    <p className="py-4">Guest Phone Number - {value?.guest_phone_number}</p>
                    <p className="py-4">Ground Name  - {value?.ground_id?.name}</p>
                    <p className="py-4">Ground Owner Name  - {value?.ground_admin_id?.name}</p>
                    <p className="py-4">Ground Owner Address  - {value?.ground_admin_id?.address}</p>
                    <p className="py-4">Total Amount  - Rs.{value?.total_amount}</p>
                    <p className="py-4"><img className="h-80" src={value?.ground_id?.image_1} alt={value?.ground_id?.image_1}/></p>
                </div>
                <div className="modal-action">
                    <button onClick={toggleModal} className="btn">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default BookingView;