import { useEffect, useState } from 'react'
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import './NewsApp.css'
import axios from 'axios'
import NewsModal from './NewsModal'

const categories = ['general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation']

const NewsApp = () => {
    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('general')
    const [showModal, setShowModal] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
            const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${apiKey}`
            const response = await axios.get(url)
            const fetchedNews = response.data.articles

            fetchedNews.forEach((article) => {
                if (!article.image) {
                    article.image = noImg
                }
            })

            setHeadline(fetchedNews[1])
            setNews(fetchedNews.slice(2, 8))
        }
        fetchNews()
    }, [selectedCategory])

    const handleCategoryClick = (e, category) => {
        e.preventDefault()
        setSelectedCategory(category)
    }

    const handleArticleClick = (article) => {
        setSelectedArticle(article)
        setShowModal(true)
    }

    return (
        <div className="news-app">
            <div className="news-header">
                <h1 className="logo">News App</h1>
            </div>
            <div className="news-content">
                <nav className="navbar">
                    <h1 className="nav-heading">Categories</h1>
                    <div className="categories">
                        {categories.map((category) => (
                            <a 
                                href="#" 
                                onClick={(e) => handleCategoryClick(e, category)} 
                                className="nav-link"
                                key={category}
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="news-section">
                    {headline && (
                        <div className="headline" onClick={() => handleArticleClick(headline)}>
                            <img src={headline.image || noImg} alt={headline.title} />
                            <h2 className="headline-title">{headline.title}</h2>
                        </div>
                    )}

                    {news && (
                        <div className="news-grid">
                            {news.map((article, index) => (
                                <div className="news-grid-item" key={index} onClick={() => handleArticleClick(article)}>
                                    <img src={article.image || noImg} alt={article.title} />
                                    <h3>{article.title}</h3>
                                </div>
                            ))}
                        </div>
                    )}    
                </div>
                <NewsModal 
                    show={showModal} 
                    article={selectedArticle}
                    onClose={() => setShowModal(false)}
                />
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