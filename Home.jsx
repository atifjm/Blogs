import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import './Home.css';

const Home = () => {
  return (
    <div>
    
        <Header />
        <div className='home'>
          <Posts />
          <Sidebar />
        </div>
      
    </div>
  )
}

export default Home
