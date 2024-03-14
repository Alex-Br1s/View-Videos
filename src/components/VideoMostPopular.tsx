

interface VideoListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentVideos: any[];
}

const VideoMostPopular: React.FC<VideoListProps> = ({currentVideos}) => {


  console.log(currentVideos)
  const renderList = currentVideos.map((video) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id}`;
    return (
      <div key={video.id}>
        <iframe width="300" height="170" src={videoUrl} className="rounded-md" title={video.title}></iframe>
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