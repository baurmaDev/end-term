import React, { useState, useEffect} from 'react'
import YouTube from '../api/YouTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import LikeButton from './LikeButton';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './Main';


const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        OnTermSubmit('Minecraft');
    }, []);

    const OnTermSubmit = async term => {
        const responce = await YouTube.get('/search', {
            params: {
                q: term,
            },
        });
            setVideos(responce.data.items);
            setSelectedVideo(responce.data.items[0]);  
    };
    
    
    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

    return(
            <Routes>
                
                <Route element={<Main />} path="/youtube" />
                <Route path="*" element={<Navigate to="/youtube" replace />} />
            </Routes>
        );
};
export default App;