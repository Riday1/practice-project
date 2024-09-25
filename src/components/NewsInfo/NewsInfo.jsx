import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
const NewsInfo = ({ news }) => {
    const { others_info, rating, total_view, title, author, thumbnail_url, image_url, details } = news
    return (
        <div className='p-4 border' >
            <div className="flex justify-between items-center bg-gray-100 p-4">
                <div className="flex items-center ">
                    <img className="rounded-full w-14 " src={author.img} alt="" />
                    <div className='space-y-2 ml-3'>
                        <p className='text-sm font-bold'>{author.name}</p>
                        <p className='text-sm text-gray-400'>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaRegBookmark />
                    <BsShare className='ml-4' />
                </div>
            </div>
            <div className='mt-8 mb-4'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <img src={thumbnail_url} alt="" />
                {
                    details.length > 200 ?
                        <p className='text-gray-500 mt-4'>{details.slice(0, 200) + '...'} <span className='text-orange-500 font-bold'>Read More</span></p>
                        :
                        <p className='text-gray-500 mt-4'>{details}</p>
                }
            </div>
            <hr />
            <div className='flex justify-between py-3'>
                <p>Ratings: {rating.number}</p>
                <p>View:{total_view}</p>
            </div>
        </div>
    );
};


NewsInfo.propTypes = {
    news: PropTypes.object
}

export default NewsInfo;