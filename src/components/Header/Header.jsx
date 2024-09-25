import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <div className='text-center'>
            <img className='mx-auto my-6' src={logo} alt="" />
            <p className='mb-4 text-lg text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='mb-4 text-lg font-semibold'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

            <div className='mt-8 p-4 flex '>
                <button className='btn rounded-none text-white bg-[#D72050] px-8'>Latest</button>
                <Marquee className='mr-10'>
                    <p className='mx-10'>Ukrain russia war are not going to end very soon..</p>
                    <p className='mx-10'>Ukrain russia war are not going to end very soon.1.</p>
                    <p className='mx-10'>Ukrain russia war are not going to end very soon.2.</p>
                </Marquee>
            </div>

        </div>
    );
};

export default Header;