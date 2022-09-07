import { useState, useEffect } from 'react'
import { ArticleCard } from '../components/ArticleCard'

const Home = () => {
   const [articles, setArticles] = useState([])

useEffect(() => {
  fetch('https://salty-beyond-51160.herokuapp.com/')
  .then(res => res.json())
  .then(data => setArticles(data))
  .catch(err => console.error(err))
  }, [])

const allArticles = articles.map((articles, index) => {
  return <ArticleCard key={articles._id} articles={articles} index={index} />
})
  
return (
  <div className='container'>
  <h1><p style={{color: 'bisque',fontSize: 60,}}>Universal Connections</p></h1>
    <div className='articles'>{allArticles}
  
    </div>
  </div>
  )
}

export default Home