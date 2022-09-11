import { useState } from 'react';
import { useLocation,} from 'react-router-dom';

const AdminTest = () => {
  const [form, setForm]= useState({})
  const [displayForm, setDisplayForm] = useState(false)
  const location = useLocation()
  // const navigate = useNavigate
  const { Title, Topic, Date, Description, Image } = location.state;

  const handleDelete = (event) => {
    event.preventDefault();
    console.log('Delete request sent to API');

    fetch(`http://localhost:4000/delete-article?Title=${Title}`, {
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

  const handleUpdate = (event) => {
    event.preventDefault();
   console.log('Sending request to update API');
    
    fetch(`http://localhost:4000/update-article?Title=${Title}`,  {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err));
      //navigate('/')
  };

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  

  return (
    <div className='container'>
      <div className='single-article'>
        <img src={Image} alt='' />
        <h1>{Title}</h1>
        <h3>{Topic}</h3>
        <h4>{Date}</h4>
        <h4>{Description}</h4>

  {displayForm && 
        <form className='add-form'>
          <label htmlFor=''>Title </label>
          <input
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='ex. How a star is born'
            name='Title'
            id='Title'
            defaultValue={Title}
        /><br></br>  

          <label htmlFor=''>Topic </label>
          <input
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='ex. Black Holes'
            name='Topic'
            id='Topic'
            defaultValue={Topic}
          /><br></br>  

          <label htmlFor=''>Date </label>
          <input
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='ex. 01/06/21'
            name='Date'
            id='Date'
            defaultValue={Date}
          />

          <label htmlFor=''>Description </label>
          <input
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder=''
            name='Description'
            id='Description'
            defaultValue={Description}
          />    
        </form>}
      
        <button onClick={handleDelete}>Delete Article</button>
        <button onClick={handleUpdate}>Update Article</button>
        <button onClick={() => setDisplayForm(!displayForm)}>Display Form</button>
       
      </div>
    </div>
  );
};

export default AdminTest;