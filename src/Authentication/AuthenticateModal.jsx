import React, { useState } from 'react';

const AuthModal = () => {
    const [isLogin, setIsLogin] = useState(true); 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Info:", e.target.email.value, e.target.password.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register Info:", e.target.email.value, e.target.password.value);
    };

    return (
        <div>
            {/* ওপেন বাটন */}
            <button
                className="btn bg-gray-700 text-white px-8 py-2 font-semibold"
                onClick={() => document.getElementById('auth_modal').showModal()}
            >
                Login
            </button>

            <dialog id="auth_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn text-red-400 bg-gray-100 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h1 className="text-3xl font-bold text-center">
                        {isLogin ? "Login User" : "Register User"}
                    </h1>

                    <div className="card-body">
                        <form onSubmit={isLogin ? handleLogin : handleRegister}>
                            {!isLogin && (
                                <div className="form-control">
                                    <label className="label">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input input-bordered w-full"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                            )}
                            <div className="form-control">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
                            </div>

                            <button className="btn btn-neutral mt-6 w-full">
                                {isLogin ? "Login" : "Register"}
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <p>
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    className="text-blue-600 font-bold ml-2 underline"
                                    onClick={() => setIsLogin(!isLogin)} // 
                                >
                                    {isLogin ? "Register Now" : "Login Now"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AuthModal;