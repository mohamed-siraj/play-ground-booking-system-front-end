import { Formik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Header from '@/components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CreateUsers } from '@/axios/useApi';

const Signup = () => {

    const router = useRouter();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        name: Yup.string().required('Name is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
        user_type: Yup.string().required('User type is required'),
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
    });

    return (<>
            <Header />
        <Head>
            <title>sign-up</title>
        </Head>
        <div className="card lg:card-side w-full rounded-none">
            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-2xl font-bold mb-6">Sign-up</h2>
                <Formik
                    initialValues={{ email: '', password: '', user_type: '', name: '', password_confirmation: '', phone_number: '', address: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        CreateUsers(values);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                        router.push('/'); //
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
                                    {/* <option value={`SUPER_ADMIN`}>Super Admin</option> */}
                                    {/* <option value={`GROUND_ADMIN`}>Ground Admin</option> */}
                                    <option value={`CUSTOMER`}>Customer</option>
                                </select>
                                {errors.user_type && <div style={{ color: 'red' }}>{errors.user_type}</div>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#030708" /><path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#030708" /></svg>
                                    <input name="name" onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name} />
                                </label>
                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input name="email" type="email" className="grow" placeholder="email@example.com" onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} />
                                </label>
                                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                                    <input className="grow" placeholder="Enter password" type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} />
                                </label>
                                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                                    <input className="grow" placeholder="Enter Confirm password" type="password"
                                        name="password_confirmation"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password_confirmation} />
                                </label>
                                {errors.password_confirmation && <div style={{ color: 'red' }}>{errors.password_confirmation}</div>}
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg height="30" viewBox="0 0 100 100" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none" /><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" /></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" id="location" width="16" height="16" version="1.1" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="SVGID_1_" d="M0 0h100v100H0z"></path>
                                        </defs>
                                        <path d="M79.535 27.4c-.32-1.201-.971-2.48-1.452-3.6C72.324 9.96 59.741 5 49.581 5 35.98 5 21 14.12 19 32.919v3.841c0 .16.055 1.6.134 2.32 1.121 8.959 8.19 18.48 13.47 27.439 5.68 9.599 11.574 19.041 17.415 28.479 3.6-6.159 7.188-12.399 10.707-18.399.959-1.761 2.071-3.521 3.031-5.201.64-1.119 1.862-2.238 2.421-3.279C71.857 57.722 81 47.24 81 36.92v-4.24c0-1.119-1.387-5.039-1.465-5.28M49.83 46.68c-3.998 0-8.374-1.999-10.534-7.52-.322-.879-.296-2.64-.296-2.801v-2.48c0-7.038 5.976-10.239 11.175-10.239 6.4 0 11.351 5.121 11.351 11.521S56.23 46.68 49.83 46.68"></path>
                                    </svg>

                                    <input className="grow" placeholder="Enter address"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address} />
                                </label>
                                {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning" disabled={isSubmitting}>Register</button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div className="divider">OR</div>
                <div className="text-center">
                    <p>Do You Have an account.?</p>
                    <Link className="link link-warning" href="/login">Log in now</Link>
                </div>
            </div>
            <figure className="hidden md:block lg:w-1/2">
                <img src="https://media.istockphoto.com/id/460438605/photo/foot-on-top-of-soccer-ball.jpg?s=612x612&w=0&k=20&c=xZblvbTWtTZzaaRORLL8BVUBnH9n7QbJYXFT842HpFc=" alt="Random image" className="object-cover w-full h-screen" />
            </figure>
        </div>

    </>);
}

export default Signup;