import React from "react";
import "../styles/cardVideo.css";

interface VideoListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchResults: any[];
}

const VideoListChannel: React.FC<VideoListProps> = ({ searchResults }) => {
  // Filtrar el primer elemento si no es un vídeo
  const filteredResults = searchResults.length > 0 && !searchResults[0].id.videoId ? searchResults.slice(1) : searchResults;

  const renderedList = filteredResults.map((video, index) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div key={index} className='flex'>
        <iframe width="300" height="170" src={videoUrl} className="rounded-md" title={video.snippet.title}></iframe>
      </div>
    );
  });

  return <div className="flex flex-wrap justify-center gap-5 my-10">{renderedList}</div>;
};

export default VideoListChannel;

