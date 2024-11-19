
type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    toggleModal: () => void; // Define the type for the function prop
};

const MessageView = ({ value, toggleModal }: ChildComponentProps) => {

    return (<>
        <div className="modal modal-open ">
            <div className="modal-box w-11/12 max-w-5xl">
                <h2 className="font-bold text-lg">Message ID - {value?.id}</h2>
                <p className="py-4">Ground Name  - {value?.ground_id?.name}</p>
                <p className="py-4">Message  - {value?.message}</p>
                <div className="modal-action">
                    <button onClick={toggleModal} className="btn">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default MessageView;