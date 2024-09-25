import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import image1 from '../../assets/qZone1.png'
import image2 from '../../assets/qZone2.png'
import image3 from '../../assets/qZone3.png'

const RightSideNavigation = () => {

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-xl font-bold">Login With</h1>
                <div >
                    <button className="btn w-full rounded-none btn-outline mt-3">
                        <FaGoogle />
                        Login With Google</button>
                    <button className="btn w-full rounded-none btn-outline mt-3">
                        <FaGithub />
                        Login With Github</button>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-2">Find Us On</h1>
                <div >
                    <button className="btn w-full rounded-t-md rounded-b-none btn-outline ">
                        <CiFacebook />
                        Facebook</button>
                    <button className="btn w-full rounded-none btn-outline ">
                        <RxTwitterLogo />
                        Twitter</button>
                    <button className="btn w-full rounded-t-none rounded-b-md btn-outline ">
                        <BsInstagram />
                        Instagram</button>
                </div>
                <div className="bg-gray-100 p-3">
                    <h1 className="text-xl font-bold">Q-Zone</h1>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNavigation;