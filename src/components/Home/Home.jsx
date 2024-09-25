
import RightSideNavigation from "../../Shared/RightSideNavigation/RightSideNavigation";
import LeftSideNavigation from "../../Shared/LeftSideNavigation/LeftSideNavigation";
import { useEffect, useState } from "react";
import NewsInfo from "../NewsInfo/NewsInfo";
import { Link } from "react-router-dom";
const Home = () => {


    const [allNews, setAllNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('../../../public/data/news.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllNews(data)
                setFilteredNews(data)

            })
    }, [])

    const handleNewsCategory = (id) => {
        if (id == '0') {
            setFilteredNews(allNews)

        }
        else {

            const filteredNews = allNews?.filter(news => news.category_id === id)
            setFilteredNews(filteredNews)

        }
        setLoading(false)
    }

    console.log(filteredNews)
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNavigation handleNewsCategory={handleNewsCategory}></LeftSideNavigation>
                </div>
                <div className="md:col-span-2 ">
                    {

                        filteredNews.length > 0 ?


                            filteredNews.map(news => <Link
                                key={news._id}
                                to={`/newsDetails/${news._id}`}
                            >
                                <NewsInfo news={news}>  </NewsInfo>
                            </Link>)
                            :
                            <h1 className="text-2xl font-semibold text-center ">No Data Found</h1>
                    }
                </div>
                <div className="">
                    <RightSideNavigation></RightSideNavigation>
                </div>
            </div>
        </div>
    );
};

export default Home;