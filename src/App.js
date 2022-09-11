import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Planet from './sandbox/Planet'
// import List from './pages/List'
// import Admin from './pages/Admin'
import './assets/styles.css'
import SingleArticle from './pages/SingleArticle'
import AddArticle from './pages/AddArticle'
import AdminTest from './pages/AdminTest'


function App() {

return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-article' element={<SingleArticle />} />
        <Route path='/add-article' element={<AddArticle />} />
        <Route path='/admin-test' element={<AdminTest />} />
        <Route path='/planet' element={<Planet />} />
        {/* <Route path='/Admin' element={<Admin />} /> */}
        {/* <Route path='/List' element={<List />} /> */}
        <Route path='*'element={<h2>Wrong Galaxy...page not found.</h2>} />  
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );

}
export default App;
