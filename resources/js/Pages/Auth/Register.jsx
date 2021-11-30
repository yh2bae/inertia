import { Link, useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Guest from './../Layouts/Guest';

export default function Register({errors}) {

    const { data, setData, post, reset} = useForm({
        name : '',
        email : '',
        username : '',
        location : '',
        password : '', 
    });
    const changeHandler = (e) => setData({...data, [e.target.id]:e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('register'),  { 
            data, onSuccess: () => reset()  
        })
    }
    return (
        <>
            <div className="card">
                <div className="card-body bg-light">
                    <div className="mb-3 text-center">
                        <h3>Register Page</h3>
                        <h5>Create your account</h5>
                    </div>
                    <form onSubmit={onSubmit} noValidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter you email"
                                        value={data.email}
                                        onChange={changeHandler}
                                    />
                                    {errors && (
                                        <div className="text-danger mt-1">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="form-control"
                                        placeholder="Enter you username"
                                        value={data.username}
                                        onChange={changeHandler}
                                    />
                                    {errors && (
                                        <div className="text-danger mt-1">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter you name"
                                        value={data.name}
                                        onChange={changeHandler}
                                    />
                                    {errors && (
                                        <div className="text-danger mt-1">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="location"
                                        className="form-label"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        className="form-control"
                                        placeholder="Enter you location"
                                        value={data.location}
                                        onChange={changeHandler}
                                    />
                                    {errors && (
                                        <div className="text-danger mt-1">
                                            {errors.location}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter you password"
                                value={data.password}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="d-grid gap-2 mb-3">
                            <button type="submit" className="btn btn-success">
                                Register
                            </button>
                        </div>
                        <p>
                            Already registered ?{" "}
                            <span className="text-muted">
                                <Link
                                    className="text-decoration-none text-success"
                                    href={route("login")}
                                >
                                    Login
                                </Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <Guest title="Register" children={page} />