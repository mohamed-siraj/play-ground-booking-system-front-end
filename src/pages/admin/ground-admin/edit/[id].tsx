'use client';

import Head from "next/head";
import AdminHeader from "../../components/AdminHeader";
import AdminAside from "../../components/AdminAside";
import AdminFooter from "../../components/AdminFooter";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { GetByIdUsers, UpdateUsers } from "@/axios/useApi";
import { useEffect, useState } from "react";
const AdminGameTypeEdit = () => {

    const [initialValues, setInitialValues] = useState({ 
        user_type: '', 
        name: '', 
        phone_number: '', 
        address: '' 
    });

    const router = useRouter();
    
    const { id } = router.query; //

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        user_type: Yup.string().required('User type is required'),
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
    });

    useEffect(() => {
        GetByIdUsers(id).then((data) => {
            setInitialValues({
                user_type: data?.success?.user_type,
                name: data?.success?.name,
                phone_number: data?.success?.phone_number,
                address: data?.success?.address,
              });
        });
    },[id])

    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Ground Edit</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <AdminAside />
                </aside>
            </div>

            <div className="basis-full md:basis-full mb-3 ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <div className="card-body lg:w-1/2">
                                <h2 className="card-title text-2xl font-bold mb-6">Ground Admin Edit</h2>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        const data = Object.assign(values, {id : id});
                                        UpdateUsers(data)
                                        setTimeout(() => {
                                            setSubmitting(false);
                                            router.push('/admin/ground-admin'); //
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
                                                    <span className="label-text">User Type</span>
                                                </label>
                                                <select className="select select-bordered w-full" name="user_type" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.user_type}>
                                                    <option disabled selected value={``}>Select User Type</option>
                                                    <option value={`SUPER_ADMIN`}>Super Admin</option>
                                                    <option value={`GROUND_ADMIN`}>Ground Admin</option>
                                                    <option value={`CUSTOMER`}>Customer</option>
                                                </select>
                                                {errors.user_type && <div style={{ color: 'red' }}>{errors.user_type}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input name="name" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name} />
                                                </label>
                                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                                            </div>
                                            <div className="form-control mt-4">
                                                <label className="label">
                                                    <span className="label-text">Phone Number</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input className="grow" placeholder="Enter Phone Number"
                                                        name="phone_number"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone_number} />
                                                </label>
                                                {errors.phone_number && <div style={{ color: 'red' }}>{errors.phone_number}</div>}
                                            </div>
                                            <div className="form-control mt-4">
                                                <label className="label">
                                                    <span className="label-text">Address</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input className="grow" placeholder="Enter address"
                                                        name="address"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.address} />
                                                </label>
                                                {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-warning" disabled={isSubmitting}>Update</button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    </div>
                    {/* <div className="grid justify-items-end mt-2">
                        <div className="join grid grid-cols-2">
                            <button className="join-item btn btn-outline">Previous page</button>
                            <button className="join-item btn btn-outline">Next</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <AdminFooter />
    </>);
};

export default AdminGameTypeEdit;