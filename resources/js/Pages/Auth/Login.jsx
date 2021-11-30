import { Link, useForm } from '@inertiajs/inertia-react';
import Guest from './../Layouts/Guest';

export default function Login({ errors }) {

    const { data, setData, post} = useForm({
        email: 'yh2bae@example.com',
        password: 'password',
        remember: ''
    })

    const changeHandler = (e) => {
        setData({
            ...data, 
            [e.target.id]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('login'), data);
        
    }

    // const [data, setData] = useState({
    //     email: 'yh2bae@example.com',
    //     password: 'password',
    //     remember: ''
    // });

  
    
    return (
        <>
            <div className="card">
                <div className="card-body bg-light">
                    <div className="mb-3 text-center">
                        <h3>Login Page</h3>
                        <h5>Sign in to your account</h5>
                    </div>
                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
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
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="remember"
                                id="remember"
                                value={data.remember}
                                onChange={(e) => setData({...data, remember: e.target.checked})}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>
                        </div>
                        <div className="d-grid gap-2 mb-3">
                            <button type="submit" className="btn btn-success">
                                Login
                            </button>
                        </div>
                        <p>
                            Don't have an account ?{" "}
                            <span className="text-muted">
                            <Link
                                className="text-decoration-none text-success"
                                href={route('register')}
                            >
                                Register
                            </Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

Login.layout = (page) => <Guest title="Login" children={page}/>
