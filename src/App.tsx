import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import VideoListChannel from "./components/VideoListChannel";
import { AuthProvider } from "./context/AuthContext";
import searchVideos from "./api/searchVideos";
import { BrowserRouter as Router } from "react-router-dom";
import videosMostPopular from "./api/videosMostPopular";
import VideoMostPopular from "./components/VideoMostPopular";
import Pagination from "./components/Pagination";
import loandingGif from "/loading-7528_256.gif";

const App: React.FC = () => {
  const [popularVideosList, setPopularVideosList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showPopularVideos, setShowPopularVideos] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);

  const videosTotal = searchResults && searchResults.length > 0 ? searchResults.length : popularVideosList.length;
  const lastIndex = currentPage * videosPerPage;
  const firstIndex = lastIndex - videosPerPage;

  const currentVideos = showPopularVideos
  ? (popularVideosList && popularVideosList.length > 0 ? popularVideosList.slice(firstIndex, lastIndex) : [])
  : (searchResults && searchResults.length > 0 ? searchResults.slice(firstIndex, lastIndex) : []);


  const handlerSearch = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const results = await searchVideos(searchTerm);
      setSearchResults(results);
      setShowPopularVideos(false);
    } catch (error) {
      console.log("Error al buscar el video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getVideoMostPopular = async () => {
    try {
      setIsLoading(true);
      const results = await videosMostPopular();
      setPopularVideosList(results);
      setShowPopularVideos(true);
    } catch (error) {
      console.log("Error al buscar el video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideoMostPopular();
  }, []);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar onSearch={handlerSearch} />
          <Pagination
            currentPage={currentPage}
            videosPerPage={videosPerPage}
            videosTotal={videosTotal}
            onPageChange={onPageChange}
          />
          {isLoading && (
            <div className="loading-container">
              <img className="h-16" src={loandingGif} alt="Loading" />
            </div>
          )}
          {!isLoading && showPopularVideos ? (
            <VideoMostPopular currentVideos={currentVideos} />
          ) : (
            <VideoListChannel searchResults={currentVideos} />
          )}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
