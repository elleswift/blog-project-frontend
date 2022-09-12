import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Planet from './sandbox/Planet'
// import background from './assets/images/Lectura.jpg'
import './assets/styles.css'
import SingleArticle from './pages/SingleArticle'
import AddArticle from './pages/AddArticle'
import AdminPath from './pages/AdminPath'

function App() {

return (

    <BrowserRouter>
      <Header />
      <Routes>
        {/* <div style={{ backgroundImage: `url(${background})`}}></div> */}
        <Route path='/' element={<Home />} />
        <Route path='/single-article' element={<SingleArticle />} />
        <Route path='/add-article' element={<AddArticle />} />
        <Route path='/admin-test' element={<AdminPath />} />
        <Route path='/planet' element={<Planet />} />
        <Route path='*'element={<h2>Wrong Galaxy...page not found.</h2>} />  
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}
export default App;
