import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NotFound from './components/NotFound'
import SearchPage from './components/SearchPage'
import VideoPage from './components/VideoPage'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full max-w-screen-2xl mx-auto px-3 md:px-6 font-roboto'>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/category/:categoryValue" element={<Home />} />
            <Route path="/search/:searchValue" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
