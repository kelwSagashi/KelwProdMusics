import React from 'react'
import { PlayerProps } from '../Player/types'

const CardPlayer: React.FC<PlayerProps> = ({ title, artist, thumbnail }) => {
    return (
        <div className='w-[200px] h-[250px] flex flex-col cursor-pointer group'>
            <img src={thumbnail} className='rounded-t-md group-hover:scale-110
            transform transition-transform duration-300 ease-in-out
            group-hover:drop-shadow-xl' />
            <span className='font-semibold mt-4'>{title}</span>
            <span className='font-thin text-neutral-300'>{artist}</span>
        </div>
    )
}

export default CardPlayer