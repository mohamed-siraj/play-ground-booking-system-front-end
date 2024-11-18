'use client';

import Head from "next/head";
import AdminHeader from "../../components/AdminHeader";
import AdminAside from "../../components/AdminAside";
import AdminFooter from "../../components/AdminFooter";
import { Formik } from 'formik';
import * as Yup from 'yup';
const AdminGameTypeCreate = () => {

    const validationSchema = Yup.object({
        type: Yup.string().required('Type is required'),
    });

    return (<>
        <AdminHeader />
        <Head>
            <title>Admin Game Type Create</title>
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
                                <h2 className="card-title text-2xl font-bold mb-6">Game Type Create</h2>
                                <Formik
                                    initialValues={{ type: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
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
                                            <div className="form-control mt-4">
                                                <label className="label">
                                                    <span className="label-text">Type</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input className="grow" placeholder="Enter Type"
                                                        name="type"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.type} />
                                                </label>
                                                {errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}
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

export default AdminGameTypeCreate;