import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import VideoListChannel from "./components/VideoListChannel";
import { AuthProvider } from "./context/AuthContext";
import searchVideos from "./api/searchVideos";
import { BrowserRouter as Router } from "react-router-dom";
import videosMostPopular from "./api/videosMostPopular";
import VideoMostPopular from "./components/VideoMostPopular";
import loandingGif from "/loading-7528_256.gif";

const App: React.FC = () => {
  const [popularVideosList, setPopularVideosList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showPopularVideos, setShowPopularVideos] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar onSearch={handlerSearch} />
          {isLoading && (
            <div className="loading-container">
              <img className="h-16" src={loandingGif} alt="Loading" />
            </div>
          )}
          {!isLoading && showPopularVideos ? (
            <VideoMostPopular currentVideos={popularVideosList} />
          ) : (
            <VideoListChannel searchResults={searchResults} />
          )}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
