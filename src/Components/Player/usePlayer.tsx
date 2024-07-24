import { createContext, FC, ReactNode, useContext, useState } from "react";
import { MusicsInfos } from "./Musics";
import { Player } from "./Player";
import { CurrentMusicType, PlayerContextType, PlayerProps } from "./types";
import { defaultMusic } from "./utils";

const PlayerContext = createContext<PlayerContextType>({
    playList: MusicsInfos,
    currentMusic: defaultMusic,
    setCurrentMusic: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [current, setCurrent] = useState<CurrentMusicType>(defaultMusic);

    //update(volume and play/pause) and replace currentMusic
    const setCurrentMusic = (val: Partial<CurrentMusicType>, replace = false) => {
        if (replace && val.src !== current.src) {
            setCurrent(val as CurrentMusicType);
        } else {
            setCurrent((prev) => ({ ...prev, ...val }));
        }
    };

    return (
        <PlayerContext.Provider
            value={{ currentMusic: current, setCurrentMusic, playList: MusicsInfos }}
        >
            {children}
            {current.src && <Player />}
        </PlayerContext.Provider>
    );
};

export const OnePlayerProvider: FC<{ children: ReactNode, musics: PlayerProps[] }> = ({ children }) => {
    const [current, setCurrent] = useState<CurrentMusicType>(defaultMusic);

    //update(volume and play/pause) and replace currentMusic
    const setCurrentMusic = (val: Partial<CurrentMusicType>, replace = false) => {
        if (replace && val.src !== current.src) {
            setCurrent(val as CurrentMusicType);
        } else {
            setCurrent((prev) => ({ ...prev, ...val }));
        }
    };

    return (
        <PlayerContext.Provider
            value={{ currentMusic: current, setCurrentMusic, playList: MusicsInfos }}
        >
            {children}
            {current.src && <Player />}
        </PlayerContext.Provider>
    );
};