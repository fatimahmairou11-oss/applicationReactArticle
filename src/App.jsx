import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { AddArticle } from './components/AddArticle'
import { ArticleList } from './components/ArticleList'
import { Provider } from 'react-redux'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Store } from './features/store'
import { Navbar } from './components/Navbar'
function App() {
 return(
   <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<ArticleList/>}/>
      <Route path="/Ajouter" element={<AddArticle/>}/>
      <Route path="/article/:id" element={<AddArticle/>}/>
     </Routes>
    </BrowserRouter>
   </Provider>
 )
}

export default App;
