
import { useState } from "react";
import { GrView } from "react-icons/gr";
import MessageView from "./MessageView";

type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]; // Define the type for the function prop
};

const MessagesList = ({ data }: ChildComponentProps) => {

    const [value, setValue] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };

    return (<>
        <table className="table table-md">
            <thead>
                <tr>
                    <th>Message ID</th>
                    <th>Ground Name</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value) => {
                        return (<>
                            <tr>
                                <td>{value?.id}</td>
                                <td>{value?.ground_id?.name}</td>
                                <td>{value?.message}</td>
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
            isOpen && <MessageView value={value} toggleModal={toggleModal} />
        }

    </>);
}

export default MessagesList;