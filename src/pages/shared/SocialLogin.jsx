import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);

    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then()
        .catch()
    }
    return (
        <div className='p-5'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-block'>Google</button>
        </div>
    );
};

export default SocialLogin;