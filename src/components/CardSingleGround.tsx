'use client'
 
import { useRouter } from 'next/navigation'

type ChildComponentProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any; // Define the type for the function prop
};

const CardSingleGround = ({ data }: ChildComponentProps) => {

    const router = useRouter()

    return (<>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className='h-44'
                    src={data.image_1}
                    alt={data.image_1} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data?.name}</h2>
                <p><span className='font-bold'>Available Date:</span> {data?.available_day_from} - {data?.available_day_to}</p>
                <p><span className='font-bold'> Location:</span> {data.location_id?.name}</p>
                <p><span className='font-bold'> Rate Per Day:</span> Rs. {data.per_day_price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={() => {
                        router.push('/ground/'+data.id)
                    }}>Book Now</button>
                </div>
            </div>
        </div>

    </>)
}
export default CardSingleGround;