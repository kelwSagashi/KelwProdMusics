import { PlayerProps } from "../types";

const music_paths = '/Musics';
export const MusicsInfos: PlayerProps[] = [
  {
    id: 1,
    title: "Messed up Again",
    src: `${music_paths}/Kew - Messed Up Again (Official Music Final).mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/MessedUpAgain.png`,
  },
  {
    id: 2,
    title: "Piece of Me",
    src: `${music_paths}/Kew - Piece of me (Official Ver.2 Music ).mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/DefaultCover.png`,
  },
  {
    id: 3,
    title: "Curse",
    src: `${music_paths}/kelw - curse (final).mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/Curse.png`,
  },
  {
    id: 4,
    title: "Hallowen",
    src: `${music_paths}/Hallowen.mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/DefaultCover.png`,
  },
  {
    id: 5,
    title: "TRFS",
    src: `${music_paths}/T R F S (KELW - MIX).mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/DefaultCover.png`,
  },
  {
    id: 6,
    title: "Unstoppable",
    src: `${music_paths}/unstoppable ver.2.mp3`,
    artist: "Kelw",
  },
  {
    id: 7,
    title: "Oh juliana",
    src: `${music_paths}/MC Niack - Oh Juliana Brazilian Bass remix Kelw.mp3`,
    artist: "Kelw",
  },
  {
    id: 8,
    title: "Vuco Nelas",
    src: `${music_paths}/KELW - VUCO NELAS - ORIGINAL.mp3`,
    artist: "Kelw",
    thumbnail: `${music_paths}/VucoNelas.png`,
  },
];

export const MusicCards: PlayerProps[] = [MusicsInfos[0], MusicsInfos[1], MusicsInfos[2]];
