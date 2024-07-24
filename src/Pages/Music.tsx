import React, { useEffect, useState } from 'react'
import Lyrics from '../Components/Lyrics/Lyric';
import { MusicsInfos } from '../Components/Player/Musics';
import { useParams } from 'react-router-dom';
import { DefaultThumbnail } from '../Components/Player/DefaultThumb';

const MusicImage: React.FC<{ thumbnail: string | undefined }> = ({ thumbnail }) => {
  return (
    <div className='relative w-full h-[200px] overflow-hidden'>
      <div className='absolute inset-0'>
        <img src={thumbnail}
          className='h-full w-full object-cover blur-md' />
      </div>
      <div className='relative z-10 h-[200px]'>
        {thumbnail ?
          <img src={thumbnail}
            className='h-full w-full object-contain rounded-lg' /> : <DefaultThumbnail />}
      </div>
    </div>
  )
}

const Music: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [index, setIndex] = useState<number>(1);
  useEffect(() => {
    if (typeof id === 'string') {
      setIndex(parseInt(id));
    }
  }, [id]);
  return (
    <div>
      {MusicsInfos[index - 1].thumbnail &&
        <MusicImage thumbnail={MusicsInfos[index - 1].thumbnail} />}
      <div className='p-4'>
        <div className='flex flex-col'>
          <span className='font-semibold mt-4'>
            {MusicsInfos[index - 1].title}
          </span>
          <span className='font-thin text-neutral-300'>
            {MusicsInfos[index - 1].artist}
          </span>
        </div>
        {
          MusicsInfos[index - 1].lyrics &&
          <Lyrics lyrics={MusicsInfos[index - 1].lyrics || ''} />
        }
      </div>
    </div>
  )
}

export default Music