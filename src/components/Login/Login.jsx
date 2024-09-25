import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {


    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const { loginUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


        setEmailError('')
        setPasswordError('')
        setLoginError('')


        // validate email

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError('Provide a valid email')
            return
        }

        // password validation
        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError('Password must have one lowercase letter')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('password must have one uppercase letter')
            return
        }
        else if (!/(?=.*\d)/.test(password)) {
            setPasswordError('password must have one digit')
            return
        }
        else if (!/(?=.*[@$!%*?&])/.test(password)) {
            setPasswordError('password must have a special character')
            return
        }
        else if (!/[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
            setPasswordError('Password length at least 8')
            return
        }


        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })

    }

    return (
        <div>
            <div className="max-w-xl p-10 mx-auto border">
                <h1 className="text-3xl font-semibold text-center mb-10">Login</h1>
                <hr />

                <form onSubmit={handleSubmit} className="space-y-8 mt-10">

                    <div>
                        <label className="font-semibold" htmlFor="Email">Email address</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="email" placeholder="Enter your email address"
                            name="email" id="Email" />
                        {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="password"> Password</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="password" name="password"
                            placeholder="Enter your Password" id="password" />
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                        {loginError && <p className="text-red-500">{loginError}</p>}
                    </div>
                    <button className="btn w-full  btn-neutral">Login</button>
                </form>
                <p className="py-4 text-center">don't have an account ? <Link to='/authentication/register' className="text-red-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;