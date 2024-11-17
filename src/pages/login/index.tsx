import { Formik } from 'formik';
import * as Yup from 'yup';
const Login = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        user_type: Yup.string().required('User type is required'),
    });

    return (<>
        <div className="card lg:card-side w-full rounded-none">
            <figure className="hidden md:block lg:w-1/2">
                <img src="https://media.istockphoto.com/id/612860162/photo/american-soccer-stadium-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=EY_ZxPRze6z6elUyUL0au4TBkvrBYbZCxpbS8U-5pcc=" alt="Random image" className="object-cover w-full h-screen" />
            </figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-2xl font-bold mb-6">Login</h2>
                <Formik
                    initialValues={{ email: '', password: '', user_type: '' }}
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
                            <div className="form-control mt-6">
                                <button className="btn btn-warning" disabled={isSubmitting}>Login</button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div className="divider">OR</div>
                <div className="text-center">
                    <p>Don&apos;t have an account?</p>
                    <a href="#" className="link link-warning">Sign up now</a>
                </div>
            </div>
        </div>

    </>);
}

export default Login;