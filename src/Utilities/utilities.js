
export const loadNewsDetails = async (id) => {
    const fetchNewsData = await fetch('../../public/data/news.json')
    const allNews = await fetchNewsData.json()

    const specificNewsDetails = allNews.find(news => news._id === id)

    return specificNewsDetails
}