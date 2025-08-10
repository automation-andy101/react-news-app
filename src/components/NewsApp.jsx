import { useEffect, useState } from 'react'
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import './NewsApp.css'
import axios from 'axios'

const NewsApp = () => {
    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
            const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${apiKey}`
            const response = await axios.get(url)
            const fetchedNews = response.data.articles

            setHeadline(fetchedNews[1])
            setNews(fetchedNews.slice(2, 8))
        }
        fetchNews()
    }, [])

    return (
        <div className="news-app">
            <div className="news-header">
                <h1 className="logo">News App</h1>
            </div>
            <div className="news-content">
                <nav className="navbar">
                    <h1 className="nav-heading">Categories</h1>
                    <div className="categories">
                        <a href="#" className="nav-link">General</a>
                        <a href="#" className="nav-link">World</a>
                        <a href="#" className="nav-link">Business</a>
                        <a href="#" className="nav-link">Technology</a>
                        <a href="#" className="nav-link">Entertainment</a>
                        <a href="#" className="nav-link">Sports</a>
                        <a href="#" className="nav-link">Science</a>
                        <a href="#" className="nav-link">Health</a>
                        <a href="#" className="nav-link">Nation</a>
                    </div>
                </nav>

                <div className="news-section">
                    {headline && (
                        <div className="headline">
                            <img src={headline.image} alt={headline.title} />
                            <h2 className="headline-title">{headline.title}</h2>
                        </div>
                    )}

                    {news && (
                        <div className="news-grid">
                            {news.map((article, index) => (
                                <div className="news-grid-item">
                                    <img src={article.image} key={index} alt={article.title} />
                                    <h3>{article.title}</h3>
                                </div>
                            ))}                                                                                          */}
                        </div>
                    )}    
                </div>
                
            </div>
            <footer>
                <p className="copyright">
                    <span>News App</span>
                </p>
                <p>&copy; All Rights Reserved. By Divine Development</p>

            </footer>
        </div>
    )
}

export default NewsApp