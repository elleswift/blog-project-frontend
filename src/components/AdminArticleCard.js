import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLocation,} from 'react-router-dom';
export const ArticleCard = ({ articles }) => {
  const [form, setForm]= useState({})  
  const [displayForm, setDisplayForm] = useState(false)
  const location = useLocation()


   //update


  //delete
  const handleDelete = (event) => {
    event.preventDefault();
    console.log('Delete request sent to API');
    console.log(articles.Title);
    fetch(`http://localhost:4000/delete-article?Title=${articles.Title}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err));
      // navigate('/')
  };
  return (
    
    <Link state={articles} to='/single-article' className='articles-item'>
      <button onClick={handleDelete}>Delete Article</button>
        <button >Update Article</button>
        <button >Display Form</button>
      <img src={articles.Image}
       alt="" />
    <h3>{articles.Title}</h3>
    <h4>{articles.Topic}</h4>
    <h6>{articles.Date}</h6>
    <h5>{articles.Description}</h5>

    
    
    </Link>
    )
}
