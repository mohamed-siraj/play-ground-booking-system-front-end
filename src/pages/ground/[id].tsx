'use client';

import { GetByIdGround } from '@/axios/useApi';
import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function GroundDetails() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [initialValues, setInitialValues] = useState<any>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [adminType, setAdminType] = useState<any>(null);

  const router = useRouter();

  const { id } = router.query; //

  useEffect(() => {
    GetByIdGround(id).then((data) => {
      setInitialValues(data?.success);
    });

  }, [id])

  useEffect(() => {
    const type = localStorage.getItem('admin_type');
    setAdminType(type)
  }, [router])


  return (
    <>
      <Header />
      <div className='md:inline-flex'>
        <div className='container mt-2 ml-2 justify-self-stat md:w-[1200px]'>
          <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={initialValues?.image_1}
                alt={initialValues?.image_1}
                className="w-full h-96" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* <div id="slide2" className="carousel-item relative w-full">
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
            </div> */}
          </div>
          <p className='text-2xl font-bold uppercase mb-5'>{initialValues?.game_type_id?.type} | {initialValues?.level} | {initialValues?.surrounding}</p>
        </div>

        <div className='container mt-2 ml-2 justify-self-end'>
          <h1 className='text-4xl font-bold text-warning'>Book Ground</h1>
          <br></br>
          <div className='text-2xl font-bold'>Ground Name : <span className='font-normal'>{initialValues?.name}</span></div>
          <br></br>
          <p><span className='font-bold'>Available Date:</span> {initialValues?.available_day_from} - {initialValues?.available_day_to}</p>
          <p><span className='font-bold'>Location:</span> {initialValues?.location_id?.name}</p>
          <br></br>
          <p>
            {initialValues?.description}
          </p>
          <h1 className='text-4xl font-bold text-warning mt-5'>Price Per Day  : <span className='text-black'>Rs. {initialValues?.per_day_price}</span></h1>
          <div className='grid grid-cols-1 justify-items-center md:justify-items-end m-5'>
            {
              adminType && <div className='mt-10'><button className="btn btn-warning w-96" >Book Now</button></div>
            }
            {
              !adminType && <div className='mt-10'><button className="btn btn-warning w-96" >Book Now</button></div>
            }

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
