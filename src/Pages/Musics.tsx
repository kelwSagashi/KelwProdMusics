import React from 'react'
import { PlayerProvider } from '../Components/Player/usePlayer'
import { PlayGround } from '../Components/Player/Playground'

const Musics = () => {
    return (
        <div>
            <PlayerProvider>
                <PlayGround />
            </PlayerProvider>
        </div>
    )
}

export default Musics