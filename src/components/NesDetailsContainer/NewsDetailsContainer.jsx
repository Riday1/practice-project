import { Link, useLoaderData } from "react-router-dom";
import RightSideNavigation from "../../Shared/RightSideNavigation/RightSideNavigation";
import Header from "../Header/Header";
import { FaArrowLeft } from "react-icons/fa6";
import NavBar from '../NavBar/NavBar'

const NewsDetailsContainer = () => {
    const { title, details, thumbnail_url, image_url } = useLoaderData()


    return (
        <div className="max-w-5xl mx-auto">

            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-lg font-semibold">Dragon News</h1>
                    <div className="border p-4">
                        <img src={thumbnail_url} alt="" />
                        <h1 className="text-3xl font-bold py-4">{title}</h1>
                        <p className="text-gray-400">{details}</p>
                        <Link to='/' className="mt-3 py-3 px-10 bg-[#D72050] font-semibold text-white flex items-center w-[323px] justify-center">
                            <FaArrowLeft className="mr-4"></FaArrowLeft>
                            All  news in the category
                        </Link>
                    </div>
                </div>
                <RightSideNavigation></RightSideNavigation>
            </div>
        </div>
    );
};

export default NewsDetailsContainer;