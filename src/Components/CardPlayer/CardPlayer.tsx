import React from 'react'
import { CardMusicPlayerT } from './types'

const CardPlayer = ({ img, name, author }: CardMusicPlayerT) => {
    return (
        <div className='w-[200px] h-[250px] flex flex-col cursor-pointer group'>
            <img src={img} className='rounded-t-md group-hover:scale-110
            transform transition-transform duration-300 ease-in-out
            group-hover:drop-shadow-xl'></img>
            <span className='font-semibold mt-4'>{name}</span>
            <span className='font-thin text-neutral-300'>{author}</span>
        </div>
    )
}

export default CardPlayer