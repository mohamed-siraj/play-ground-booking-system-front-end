/* eslint-disable @next/next/no-img-element */
'use client';

import Head from "next/head";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { GetAllGameType, GetAllLocation, GetByIdGround, UpdateGround } from "@/axios/useApi";
import GroundAdminHeader from "../../components/GroundAdminHeader";
import GroundAdminAside from "../../components/GroundAdminAside";
import GroundAdminFooter from "../../components/GroundAdminFooter";
import { useEffect, useState } from "react";
const AdminGameTypeEdit = () => {
    const router = useRouter();

    const { id } = router.query; //

    const [file, setFile] = useState<File | null>(null);

    const [imageUrl, setImageUrl] = useState('');

    const [gameTypes, setGameTypes] = useState<[]>();
    const [locations, setLocation] = useState<[]>();
    const [initialValues, setInitialValues] = useState({ id: id, image: null, name: '', game_type_id: '', location_id: '', location_address: '', level: '', surrounding: '', per_day_price: '', available_day_from: '', available_day_to: '', description: '', ground_admin_id: '' });


    useEffect(() => {
        GetAllGameType().then((data) => setGameTypes(data.success));
        GetAllLocation().then((data) => setLocation(data.success));

        const storedToken = localStorage.getItem('user_id');
        if(storedToken){

            GetByIdGround(id).then((data) => {
                setImageUrl(data?.success?.image_1);
                setInitialValues({ id: id, image: data?.success?.image_1, name: data?.success?.name, game_type_id: data?.success?.game_type_id?.id, location_id: data?.success?.location_id?.id, location_address: data?.success?.location_address, level: data?.success?.level, surrounding: data?.success?.surrounding, per_day_price: data?.success?.per_day_price, available_day_from: data?.success?.available_day_from, available_day_to: data?.success?.available_day_to, description: data?.success?.description, ground_admin_id: storedToken });
            });

        }

    }, [id])

    /**
     * file validation
     */
    const validationSchema = Yup.object({
        image: Yup.mixed().required('Ground image is required'),
        name: Yup.string().required('Name is required'),
        game_type_id: Yup.string().required('Game type is required'),
        location_id: Yup.string().required('Location is required'),
        location_address: Yup.string().required('Google map Location Address is required'),
        level: Yup.string().required('Level is required'),
        surrounding: Yup.string().required('surrounding is required'),
        per_day_price: Yup.string().required('Per day price is required'),
        available_day_from: Yup.string().required('Available day from is required'),
        available_day_to: Yup.string().required('Available day to is required'),
        description: Yup.string().required('Description is required'),
    });

    return (<>
        <GroundAdminHeader />
        <Head>
            <title>Ground Create</title>
        </Head>
        <div className="flex flex-row">
            <div className="hidden md:basis-[300px] md:block">
                <aside>
                    <GroundAdminAside />
                </aside>
            </div>

            <div className="basis-full md:basis-full mb-3 ">
                <div className="container mx-auto px-4 mt-10">
                    <div className="bg-gray-300 rounded-md">
                        <div className="overflow-x-auto">
                            <div className="card-body ">
                                <h2 className="card-title text-2xl font-bold mb-6">Ground Create</h2>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {

    

                                        const formData = new FormData();
                                        if (file) {
                                            formData.append('file', file);
                                        }
                                        formData.append('name', values.name);
                                        formData.append('game_type_id', values.game_type_id); // Attach the file to FormData
                                        formData.append('location_id', values.location_id);
                                        formData.append('location_address', values.location_address); // Attach the file to FormData
                                        formData.append('level', values.level);
                                        formData.append('surrounding', values.surrounding); // Attach the file to FormData
                                        formData.append('per_day_price', values.per_day_price);
                                        formData.append('available_day_from', values.available_day_from); // Attach the file to FormData
                                        formData.append('available_day_to', values.available_day_to);
                                        formData.append('description', values.description);

                                        UpdateGround(values);
                                        setTimeout(() => {
                                            setSubmitting(false);
                                            router.push('/ground-admin/ground'); //
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
                                        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-4">
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
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Game Type</span>
                                                </label>
                                                <select className="select select-bordered w-full" name="game_type_id" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.game_type_id}>
                                                    <option disabled selected value={``}>Select Game Type</option>
                                                    {
                                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                        gameTypes?.map((value: any) => {
                                                            return(<>
                                                                <option value={value.id}>{value.type}</option>
                                                            </>)
                                                        })
                                                    }
                                                </select>
                                                {errors.game_type_id && <div style={{ color: 'red' }}>{errors.game_type_id}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Location</span>
                                                </label>
                                                <select className="select select-bordered w-full" name="location_id" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.location_id}>
                                                    <option disabled selected value={``}>Select Location</option>
                                                    {
                                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                        locations?.map((value: any) => {
                                                            return(<>
                                                                <option value={value.id}>{value.name}</option>
                                                            </>)
                                                        })
                                                    }
                                                </select>
                                                {errors.location_id && <div style={{ color: 'red' }}>{errors.location_id}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Google Map Location Address</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input name="location_address" className="grow" placeholder="Google Map Location Address" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.location_address} />
                                                </label>
                                                {errors.location_address && <div style={{ color: 'red' }}>{errors.location_address}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Level</span>
                                                </label>
                                                <select className="select select-bordered w-full" name="level" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.level}>
                                                    <option disabled selected value={``}>Select Level</option>
                                                    <option value={`Normal`}>Normal</option>
                                                    <option value={`Medium`}>Medium</option>
                                                    <option value={`Premium`}>Premium</option>
                                                </select>
                                                {errors.level && <div style={{ color: 'red' }}>{errors.level}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Surrounding</span>
                                                </label>
                                                <select className="select select-bordered w-full" name="surrounding" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.surrounding}>
                                                    <option disabled selected value={``}>Select surrounding</option>
                                                    <option value={`Indoor`}>Indoor</option>
                                                    <option value={`Outdoor`}>Outdoor</option>
                                                </select>
                                                {errors.surrounding && <div style={{ color: 'red' }}>{errors.surrounding}</div>}
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Available Fay From</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input name="available_day_from" type="date" className="grow" placeholder="Available Day From" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.available_day_from} />
                                                </label>
                                                {errors.available_day_from && <div style={{ color: 'red' }}>{errors.available_day_from}</div>}
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Available Fay To</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input name="available_day_to" type="date" className="grow" placeholder="Available Day To" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.available_day_to} />
                                                </label>
                                                {errors.available_day_to && <div style={{ color: 'red' }}>{errors.available_day_to}</div>}
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <textarea name="description" className="textarea" placeholder="Description" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.description} />
                                                {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Per Day Price</span>
                                                </label>
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input name="per_day_price" className="grow" type="number" placeholder="Per Day Price" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.per_day_price} />
                                                </label>
                                                {errors.per_day_price && <div style={{ color: 'red' }}>{errors.per_day_price}</div>}
                                            </div>


                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Ground Image</span>
                                                </label>
                                                <div className="grid lg:grid-cols-2 gap-4">
                                                <input
                                                        type="file"
                                                        className="file-input file-input-bordered file-input-warning w-full max-w-xs" name="image"
                                                        onChange={(event) => {
                                                            const selectedFile = event.currentTarget.files?.[0] || null;
                                                            setFile(selectedFile);
                                                            setFieldValue('image', selectedFile);
                                                        }} />
                                                <img src={imageUrl} alt={imageUrl} width="100px" height="100px"/>
                                                </div>
                                                {errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}
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
        <GroundAdminFooter />
    </>);
};

export default AdminGameTypeEdit;