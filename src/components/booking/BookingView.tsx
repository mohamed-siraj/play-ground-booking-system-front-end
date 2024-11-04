
type ChildComponentProps = {
    toggleModal: () => void; // Define the type for the function prop
};

const BookingView = ({toggleModal}: ChildComponentProps) => {

    return (<>
        <div className="modal modal-open ">
            <div className="modal-box w-11/12 max-w-5xl">
                <h2 className="font-bold text-lg">Welcome to DaisyUI Modal</h2>
                <p className="py-4">This is a sample modal using DaisyUI with Next.js.</p>
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