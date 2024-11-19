'use client';

import Footer from '@/components/Footer';
import backImage from '../assets/pexels-diego-santacruz-252431696-12616082.jpg';
import Header from "@/components/Header";
import CardSingleGround from '@/components/CardSingleGround';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { availability, GetAllGameType, GetAllLocation } from '@/axios/useApi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { setAvailability } from '@/state/slices/AvailabilityReducer';

export default function Home() {

  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.availability);

  const [initialValues, setInitialValues] = useState({ game_type: '', location: '', level: '', surrounding: '' });
  const [gameTypes, setGameTypes] = useState<[]>();
  const [locations, setLocation] = useState<[]>();

  useEffect(() => {
    GetAllGameType().then((data) => setGameTypes(data.success));
    GetAllLocation().then((data) => setLocation(data.success));
  }, [])

  /**
   * file validation
   */
  const validationSchema = Yup.object({
    game_type: Yup.string().required('Game type is required'),
    location: Yup.string().required('Location is required'),
    level: Yup.string().required('Level is required'),
    surrounding: Yup.string().required('surrounding is required'),
  });

  return (
    <>
      <Header />
      <Head>
        <title>Reserve dot com</title>
      </Head>
      <div style={{ backgroundImage: `url(${backImage.src})` }} className="bg-cover bg-center h-[480px] md:h-auto">
        <div className="grid grid-cols-1">
          <div className="h-60 mt-8 md:mt-32 ml-12 mr-12 md:ml-28 md:mr-28 lg:ml-72 lg:mr-72">
            <div className="glass rounded-lg ">


              <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  availability(values).then((data) => {
                    setSubmitting(false);
                    dispatch(setAvailability(data.success));
                  });
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                      <div className='p-5 ml-6'>
                        <select className="select select-bordered w-full max-w-xs" name="location" onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location}>
                          <option >Location</option>
                          {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            locations?.map((value: any) => {
                              return (<><option value={value.id}>{value.name}</option></>)
                            })
                          }
                        </select>
                        {errors.location && <div style={{ color: 'yellow' }}>{errors.location}</div>}
                      </div>
                      <div className='p-5 ml-6'>
                        <select className="select select-bordered w-full max-w-xs" name="game_type" onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.game_type}>
                          <option >Games Type</option>
                          {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            gameTypes?.map((value: any) => {
                              return (<><option value={value.id}>{value.type}</option></>)
                            })
                          }
                        </select>
                        {errors.game_type && <div style={{ color: 'yellow' }}>{errors.game_type}</div>}
                      </div>
                      <div className='p-5 ml-6'>
                        <select className="select select-bordered w-full max-w-xs" name="level" onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.level}>
                          <option >Level</option>
                          <option value={`Normal`}>Normal</option>
                          <option value={`Medium`}>Medium</option>
                          <option value={`Premium`}>Premium</option>
                        </select>
                        {errors.level && <div style={{ color: 'yellow' }}>{errors.level}</div>}
                      </div>
                      <div className='p-5 ml-6'>
                        <select className="select select-bordered w-full max-w-xs" name="surrounding" onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.surrounding}>
                          <option >Surroundings</option>
                          <option value={`Indoor`}>Indoor</option>
                          <option value={`Outdoor`}>Outdoor</option>
                        </select>
                        {errors.surrounding && <div style={{ color: 'yellow' }}>{errors.surrounding}</div>}
                      </div>
                    </div>
                    <div className='grid grid-cols-1 pb-5'>
                      <div className='justify-self-center'>
                        <button className="btn btn-warning w-48" disabled={isSubmitting}>Search</button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-gray-100 p-4 m-5 rounded-lg">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-10 md:ml-20'>
          {
            data.map((value) => {
              return (<><CardSingleGround data={value} /></>)
            })
          }

        </div>
        {
          data.length === 0 && <div className='text-center text-lg'>No Availability</div>
        }
      </div>
      <Footer />
    </>
  );
}
