'use client';

import Head from "next/head";
import AdminHeader from "../../components/AdminHeader";
import AdminAside from "../../components/AdminAside";
import AdminFooter from "../../components/AdminFooter";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { CreateLocation } from "@/axios/useApi";
const AdminLocationCreate = () => {

    const router = useRouter();

    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
    });

    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Location Create</title>
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
                                <h2 className="card-title text-2xl font-bold mb-6">Location Create</h2>
                                <Formik
                                    initialValues={{ name: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        CreateLocation(values);
                                        setTimeout(() => {
                                            setSubmitting(false);
                                        }, 400);
                                        router.push('/admin/location'); //
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
                                            <div className="form-control mt-4">
                                                <label className="label">
                                                    <span className="label-text">Location Name</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input className="grow" placeholder="Enter Name"
                                                        name="name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name} />
                                                </label>
                                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-warning" disabled={isSubmitting}>Create</button>
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

export default AdminLocationCreate;