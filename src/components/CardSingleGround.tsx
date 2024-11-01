
const CardSingleGround = () => {
    return (<>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://media.istockphoto.com/id/642535186/photo/cricket-stadium.webp?a=1&b=1&s=612x612&w=0&k=20&c=zWYPTdgjGw7si1Ky7DsOcMYCFyKusGOD3J4IxjOgAKc="
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dahool Cricket Ground</h2>
                <p>Available Date: 12-10-2024 - 12-10-2024</p>
                <p>Rate Per date : 10,000/=</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Book Now</button>
                </div>
            </div>
        </div>

    </>)
}
export default CardSingleGround;