import Lottie from 'lottie-react';
import loginLottieData from '../../../assets/lottie/login.json';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const passowrd = form.password.value;
        console.log("Hello", email, passowrd);
        
        signInUser(email, passowrd)
        .then(result => {
            console.log(result.user);
        })
        .catch()
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-5xl font-bold">Sign In!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;