import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [registrationError, setRegistrationError] = useState('')
    const { createUser, verifyEmail } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoUrl.value;


        console.log(name, email, password, photoUrl)
        setEmailError('')
        setPasswordError('')
        setRegistrationError('')

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



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                verifyEmail()
                    .then(() => {
                        alert('check inbox & verify email')
                    })
            })
            .catch(error => {
                console.log(error.message)
                setRegistrationError(error.message)
            })
    }

    return (
        <div >
            <div className="max-w-xl p-10 mx-auto border">
                <h1 className="text-3xl font-semibold text-center mb-10">Register your accout</h1>
                <hr />

                <form onSubmit={handleRegister} className="space-y-8 mt-10">
                    <div >
                        <label className="font-semibold " htmlFor="name">Your Name</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="text" name="name"
                            placeholder="Enter your name" id="name" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="photoUrl">Your Photo Url</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="text" name="photoUrl"
                            placeholder="Enter photo url" id="photoUrl" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="Email">Your Email</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="email" placeholder="Enter your email address"
                            name="email" id="Email" />
                        {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="password">Your Password</label>
                        <input className="p-4 text-gray-600 bg-gray-100 w-full mt-2" type="password" name="password"
                            placeholder="Enter your Password" id="password" />
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                        <div className="flex items-center mt-2">
                            <input type="checkbox" defaultChecked className="checkbox mr-3 w-4 h-4 rounded-none" />
                            <p>accept all terms and conditions</p>
                        </div>
                        {registrationError && <p className="text-red-500">{registrationError}</p>}
                    </div>
                    <button className="btn w-full  btn-neutral">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;