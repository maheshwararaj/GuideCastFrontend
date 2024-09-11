import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import Display from './components/Display/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'
import './index.css'
const App = () => {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className='h-screen'>
      <div className='h-[90%] flex box-shadow'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload="auto" src={track.file}></audio>
    </div>
  )
}

export default App