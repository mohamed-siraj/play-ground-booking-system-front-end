import Footer from '@/components/Footer';
import backImage from '../assets/pexels-diego-santacruz-252431696-12616082.jpg';
import Header from "@/components/Header";
import CardSingleGround from '@/components/CardSingleGround';
import Head from 'next/head'

export default function Home() {
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className='p-5 ml-6'>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Location</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className='p-5 ml-6'>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Games Type</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className='p-5 ml-6'>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Level</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className='p-5 ml-6'>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Surroundings</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div className='grid grid-cols-1 pb-5'>
                <div className='justify-self-center'>
                  <button className="btn btn-warning w-48">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-gray-100 p-4 m-5 rounded-lg">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-10 md:ml-20'>
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
          <CardSingleGround />
        </div>
      </div>
      <Footer />
    </>
  );
}
