/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import "../styles/cardVideo.css";
import {useState} from 'react'
//import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../context/AuthContext";

interface VideoListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchResults: any[];
}

interface SelectedVideo {
  id:{
  videoId: string;
  }
}

const VideoListChannel: React.FC<VideoListProps> = ({ searchResults }) => {
  // Filtrar el primer elemento si no es un vídeo
  const filteredResults = searchResults.length > 0 && !searchResults[0].id.videoId ? searchResults.slice(1) : searchResults;

  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null)
  console.log(selectedVideo)
  const handlerId = (video) => {
    setSelectedVideo(video)
  }

  //const {loginWithRedirect} = useAuth0()
  const auth = useAuth()

  const handleGoogle = () => {
    console.log("Antes de iniciar sesión");
    //@ts-ignore
    auth.loginWithGoogle();
  };

  const renderedList = filteredResults.map((video, index) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoUrlSelected = selectedVideo ? `https://www.youtube.com/embed/${selectedVideo.id.videoId}`: '';
    return (
      <div key={index}>
        <div className="flex justify-between">
        <p className="font-semibold cursor-pointer" onClick={() => handlerId(video)}>Ver en simultaneo</p>
        <p className="font-semibold cursor-pointer" onClick={handleGoogle}>Elegir una cuenta</p>
        </div>
        <iframe width="300" height="170" src={videoUrlSelected ? videoUrlSelected : videoUrl} className="rounded-md" title={video.snippet.title}></iframe>
      </div>
    );
  });

  return <div className="flex flex-wrap justify-center gap-5 my-10">{renderedList}</div>;
};

export default VideoListChannel;

