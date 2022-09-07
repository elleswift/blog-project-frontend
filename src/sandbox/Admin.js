// const Admin = () => {}

// const addEntry = () => {
//   const newArticle = { Title: 'Starlight. Shine On', Date: '07/30/22', Topic: 'Stars', 'AID': '010' }

//   fetch('http://localhost:4000', { 
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newArticle)
//   })
//     .then(res => res.json()) 
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
//   console.log('New entry added')
// }

// const getData = () => {
//   fetch('http://localhost:4000') 
//   .then(res => res.json()) 
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
// console.log('getting entry')
// }

// const handleDelete = () => {
//   fetch('http://localhost:4000?AID=003', { 
//   method: 'DELETE',
//   headers: {
//   'Content-Type': 'application/json',
// },
// })
//   .then(res => res.json()) 
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
// console.log('Entry deleted')
// }

// const handleUpdate = () => {
//   const updateArticleWith = {Title: 'Mary had a', Date: '10/31/22', Topic: 'lamb', 'AID': '666' }

//   fetch('http://localhost:4000?AID=004',{ 
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updateArticleWith)
//   })
//     .then(res => res.json()) 
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
    
// console.log('Update added')

// return (
//   <>
//   <button onClick={ addEntry }>Add Entry</button>
//   <button onClick={ getData }>Get Data</button>
//   <button onClick={ handleDelete }>Delete Entry</button>
//   <button onClick={ handleUpdate }>Update Entry</button>
  
//   </>
//   )
// }
// export default Admin