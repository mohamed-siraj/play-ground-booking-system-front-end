'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CreateBooking, CreateMessage, GetByIdGround } from '@/axios/useApi';
import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDatesFromCheckInCheckOut } from '@/util/common';
import Link from 'next/link';
export default function GroundDetails() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [initialValues, setInitialValues] = useState<any>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [adminType, setAdminType] = useState<any>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showBook, setShowBook] = useState<boolean>(false);

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

  const validationSchema = Yup.object({
    message: Yup.string().required('Message is required'),
  });

  const validationBookingSchema = Yup.object({
    booking_date_from: Yup.date()
    .transform((value, originalValue) => {
      // Attempt to parse the date if it's a string
      const parsedDate = new Date(originalValue);
      return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
    })
    .min(new Date(initialValues?.available_day_from), `Date cannot be before ${new Date(initialValues?.available_day_from).toDateString()}`)
    .max(new Date(initialValues?.available_day_to), `Date cannot be after ${new Date(initialValues?.available_day_to).toDateString()}`)
    .required('Booking date from is required'),
    booking_date_to: Yup.date()
    .transform((value, originalValue) => {
      // Attempt to parse the date if it's a string
      const parsedDate = new Date(originalValue);
      return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
    })
    .min(new Date(initialValues?.available_day_from), `Date cannot be before ${new Date(initialValues?.available_day_from).toDateString()}`)
    .max(new Date(initialValues?.available_day_to), `Date cannot be after ${new Date(initialValues?.available_day_to).toDateString()}`)
    .required('Booking date to is required'),
    total_amount: Yup.string().required('Total amount is required'),
  });



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
          <p><span className='font-bold'>Google Map :  </span> <Link target='blank' href={initialValues?.location_address}>Click Here</Link> </p>
          <br></br>
          <p>
            {initialValues?.description}
          </p>
          <h1 className='text-4xl font-bold text-warning mt-5'>Price Per Day  : <span className='text-black'>Rs. {initialValues?.per_day_price}</span></h1>
          <div className='grid grid-cols-1 justify-items-center md:justify-items-end m-5'>
            {
              adminType && <div className='mt-10'><button className="btn btn-warning w-96" onClick={() => { setShowBook(!showBook) }}>Book Now</button></div>
            }
            {
              !adminType && <div className='mt-10'><button className="btn btn-warning w-96" onClick={() => { setShowMessage(!showMessage) }}>Send Message Now</button></div>
            }

          </div>
        </div>
      </div>

      {
        showMessage && <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Send Your Message To Ground Owners</h2>
          <Formik
            initialValues={{ message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const payload = Object.assign(values, { ground_id: initialValues?.id, ground_admin_id: initialValues?.ground_admin_id?.id })
              CreateMessage(payload).then((value) => {
                router.push('/');
              });
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea name="message" className="textarea textarea-warning" placeholder="Message............." onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message} />
                  {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning" disabled={isSubmitting}>Send Message</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      }

      {
        showBook && <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Book Now</h2>
          <Formik
            initialValues={{ guest_phone_number: '', guest_name: '', total_amount: '', booking_date_from: '', booking_date_to: '', customer_id: localStorage.getItem('user_id'), ground_id: initialValues?.id, ground_admin_id: initialValues?.ground_admin_id?.id }}
            validationSchema={validationBookingSchema}
            onSubmit={(values, { setSubmitting }) => {
              CreateBooking(values).then((value) => {
                router.push('/');
              });
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              setFieldValue,
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Booking Date From</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input name="booking_date_from" type="date" className="grow" placeholder="Booking Date From" onChange={(e)=>{
                      handleChange(e);
                      setFieldValue('booking_date_from', e.target.value);

                      const days = getDatesFromCheckInCheckOut(new Date(values.booking_date_from), new Date(values.booking_date_to));
                      setFieldValue('total_amount', days * Number(initialValues?.per_day_price));
                    }}
                      onBlur={handleBlur}
                      min={initialValues?.available_day_from}
                      max={initialValues?.available_day_to}
                      value={values.booking_date_from} 
                      />
                  </label>
                  {errors.booking_date_from && <div style={{ color: 'red' }}>{errors.booking_date_from}</div>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Booking Date To</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input name="booking_date_to" type="date" className="grow" placeholder="Booking Date To" onChange={(e)=>{
                      handleChange(e);
                      setFieldValue('booking_date_to', e.target.value);

                      const days = getDatesFromCheckInCheckOut(new Date(values.booking_date_from), new Date(values.booking_date_to));
                      console.log(days);
                      setFieldValue('total_amount', days * Number(initialValues?.per_day_price));
                    }}
                      onBlur={handleBlur}
                      min={initialValues?.available_day_from}
                      max={initialValues?.available_day_to}
                      value={values.booking_date_to} />
                  </label>
                  {errors.booking_date_to && <div style={{ color: 'red' }}>{errors.booking_date_to}</div>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Amount</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input name="total_amount" type="number" className="grow" placeholder="Total Amount" onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.total_amount} readOnly/>
                  </label>
                  {errors.total_amount && <div style={{ color: 'red' }}>{errors.total_amount}</div>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Guest Name</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input name="guest_name"  className="grow" placeholder="Guest Name" onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.guest_name}/>
                  </label>
                  {errors.guest_name && <div style={{ color: 'red' }}>{errors.guest_name}</div>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Guest Phone Number</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input name="guest_phone_number" type="number" className="grow" placeholder="Guest Phone Number" onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.guest_phone_number} readOnly/>
                  </label>
                  {errors.guest_phone_number && <div style={{ color: 'red' }}>{errors.guest_phone_number}</div>}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning" disabled={isSubmitting}>Book Now</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      }

      <Footer />
    </>
  );
}
