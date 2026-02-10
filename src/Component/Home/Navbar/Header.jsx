import {  format } from "date-fns";

const Header = () => {
    const today = new Date(); 
    return (
        <div className='flex flex-col justify-center items-center mt-5'>
           <div className="space-y-3">
            <img className="w-[650px]" src="/logo.png" alt="" />
                <p className="text-gray-400 text-xl text-center">Journalism Without Fear or Favour</p>
                <p className="text-gray-500 text-xl text-center">{format(today,"eeee, MMMM,yyyy")}</p>
           </div>
        </div>
    );
};

export default Header;