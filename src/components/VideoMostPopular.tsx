import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface VideoListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentVideos: any[];
}
interface SelectedVideo {
  id: string
}

const VideoMostPopular: React.FC<VideoListProps> = ({currentVideos}) => {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null)

  const handlerId = (video) => {
    setSelectedVideo(video)
  }

  const auth = useAuth();

  const handleGoogle = (e) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    auth.loginWithGoogle();
  };


  const renderList = currentVideos.map((video) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id}`;
    const videoUrlSelected = selectedVideo ? `https://www.youtube.com/embed/${selectedVideo.id}` : '';
    console.log(videoUrlSelected)
    return (
      <div key={video.id} >
        <div className="flex justify-between">
        <p className="font-semibold cursor-pointer" onClick={() => handlerId(video)}>Ver en simultaneo</p>
        <p className="font-semibold cursor-pointer" onClick={handleGoogle} >Elegir una cuenta</p>
        </div>
        <iframe width="270" height="150" src={videoUrlSelected ? videoUrlSelected : videoUrl} className="rounded-md" title={video.title}></iframe>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-4xl font-bold ml-5 my-5">Videos Populares</h1>
      <div className="flex justify-center gap-5 my-10 flex-wrap">{renderList}</div>
    </div>
  );
};

export default VideoMostPopular