import { Link } from 'react-router-dom'

export const ArticleCard = ({ articles }) => {

  return (
    
    <Link state={articles} to='/single-article' className='articles-item'>

      <img src={articles.Image}
       alt="" />
    <h3>{articles.Title}</h3>
    <h4>{articles.Topic}</h4>
    <h6>{articles.Date}</h6>
    <h5>{articles.Description}</h5>

    
    
    </Link>
    )
}
