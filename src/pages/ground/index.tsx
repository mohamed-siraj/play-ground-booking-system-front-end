import Footer from '@/components/Footer';
import Header from "@/components/Header";

export default function GroundDetails() {
  return (
    <>
      <Header />
      <div className='md:inline-flex'>
        <div className='container mt-2 ml-2 justify-self-stat md:w-[1200px]'>
          <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://t3.ftcdn.net/jpg/06/87/99/46/360_F_687994619_EsDIMiMqpmvP8eGwZPX2w0zPTr100rt8.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://www.shutterstock.com/image-illustration/illuminated-round-cricket-stadium-full-600nw-1393589663.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://images.augustman.com/wp-content/uploads/sites/2/2023/04/20190003/untitled-design-2023-04-16t071319-214.jpeg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <p className='text-2xl font-bold uppercase'>Cricket | premium | out door</p>
        </div>

        <div className='container mt-2 ml-2 justify-self-end'>
          <h1 className='text-4xl font-bold text-warning'>Book Ground</h1>
          <br></br>
          <div className='text-2xl font-bold'>Ground Name : <span className='font-normal'>vebar ground</span></div>
          <br></br>
          <p>Available Date: 12-10-2024 - 12-10-2024</p>
          <p>Location: colombo</p>
          <p>Rate Per date : 10,000/=</p>
          <br></br>
          <p>
            Sports Grounds: Information about sports fields, stadiums, or arenas, including layout, facilities, maintenance, and history.

            Ground as Earth: Related to soil, gardening, or landscaping, focusing on soil types, plant growth, and sustainable practices.

            Electrical Grounding: In electrical engineering, grounding involves connecting electrical systems to the earth to prevent electric shocks, short circuits, and equipment damage.

            Foundational Content:  could also mean foundational or introductory information, setting the base for understanding a subject.
          </p>
          <h1 className='text-4xl font-bold text-warning mt-5'>Price : <span className='text-black'>10,000/=</span></h1>
          <div className='grid grid-cols-1 justify-items-center md:justify-items-end m-5'>
            <div className='mt-10'><button className="btn btn-warning w-96" >Book Now</button></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
