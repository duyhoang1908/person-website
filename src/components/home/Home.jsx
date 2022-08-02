import React from 'react'
import "./home.scss"
import LeftBar from './LeftBar'
import RightBar from './RightBar'

const Home = ({route, setRoute}) => {
  return (
    <div className='home'>
        <LeftBar />
        <RightBar route={route} setRoute={setRoute}/>
    </div>
  )
}

export default Home