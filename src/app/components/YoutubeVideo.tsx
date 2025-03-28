import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
  return (
    <div className='w-full bg-[#C31D24] flex justify-center items-center p-4'>
      <iframe
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;