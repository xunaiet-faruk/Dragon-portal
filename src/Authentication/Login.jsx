import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
    const handleLogin =e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
    }
    return (
       <div>
            
            <button className="btn  bg-gray-700 text-white px-8 py-2 font-semibold" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-400 bg-gray-100 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className="texdt-5xl  font-bold text-center">Login User </h1>

                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                                <div className="card-body">
                                   <form onSubmit={handleLogin} action="">
                                        <fieldset className="fieldset">
                                            <label className="label">Email</label>
                                            <input name="email" type="email" className="input w-[350px]" placeholder="Email" />
                                            <label className="label">Password</label>
                                            <input name="password" type="password" className="input w-[350px]" placeholder="Password" />

                                            <button className="btn btn-neutral mt-4">Login</button>
                                        </fieldset>
                                       
                                   </form>
                                    <p>Cannot Have an Acoount PLease <Register/></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </dialog>


          


       </div>
    );
};

export default Login;
