import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'


const NewsApp = () => {
  return (
    <div className="news-app">
        <div className="news-header">
            <h1 className="logo">News App</h1>
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
                    <div className="headline">
                        <img src={techImg} alt="Headline Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsApp