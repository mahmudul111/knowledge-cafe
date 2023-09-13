
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = blog =>{
      console.log('hello')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-5 max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
