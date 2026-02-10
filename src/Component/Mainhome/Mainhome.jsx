import Rightnav from "./rIGHTNAV.JSX";
import Sidehome from "./Sidehome";


const Mainhome = () => {
    return (
        <div className="mt-5 ">
           <div className="grid grid-cols-13 gap-5 justify-center  w-11/12 mx-auto">
                <div className="col-span-3 ">
                    <h1 className="text-xl font-semibold">All Caterogy</h1>
                    <div className="mt-4">
                        <Sidehome/>
                    </div>
                </div>
                <div className="col-span-7 ">midel</div>
                <div className="col-span-3 ">
                <Rightnav/>

                </div>
           </div>
        </div>
    );
};

export default Mainhome;