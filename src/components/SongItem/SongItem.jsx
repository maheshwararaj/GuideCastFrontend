import React, { useContext } from 'react'
import { PlayerContext } from '../../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className=' min-w-[180px] hover:bg-[#ffffff26] p-2 px-3 rounded cursor-pointer'>
      <img className='rounded' src={image} alt="" />
      <p className=' font-bold mt-2 mb-1'>{name}</p>
      <p className=' text-[#00000090] text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem