import { useState } from 'react';

const AddArticle = () => {
  const [form, setForm] = useState({});

  const sendArticle = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/add-article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    console.log('Article sent to API');
  };
  console.log(form);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.id);
    console.log(form);
  };

  return (
    <div className='container'>
      <h1>Add Article</h1>
      <form className='add-form'>
        <label htmlFor=''>Title </label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='ex. How a star is born'
          name='Title'
          id='Title'
        />

        <label htmlFor=''>Topic </label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='ex. Black Holes'
          name='Topic'
          id='Topic'
        />

        <label htmlFor=''>Date </label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='ex. 01/06/21'
          name='Date'
          id='Date'
        />

        <label htmlFor=''>Description </label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder=''
          name='Desciption'
          id='Description'
        />
        <button onClick={(event) => sendArticle(event)}>Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
