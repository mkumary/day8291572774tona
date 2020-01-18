import React, { useEffect, useState } from 'react';
import './App.css';
import { getImageList, getImageDetails } from './service/service'
import DetailView from './DetailView/DetailView';
import ImageList from './ImageList/ImageList';
import ImageView from './ImageView';
import LoadingIndicator from './LoadingIndicator'

function App() {
  const [imageList, setImageList] = useState([])
  const [imageDetail, setImageDetail] = useState({});
  useEffect(() => { 
    getImageList().then(res => {
      res.forEach(element => {
        element.url = element.url.replace('=>', ':');
      })
      setImageList(res);
      setImageDetail(res[0])
    });
  }, [])

  const handleOnImageClick = (imageId) => { 
    getImageDetails(imageId).then(res => setImageDetail(res));
  }
  return (
    <div className="container">
      <div className="left-container">
        {imageDetail.id ? <ImageView imageDetail={imageDetail}></ImageView> : <LoadingIndicator></LoadingIndicator>}
      </div>
      <div className="right-container">
        <ImageList imageList={imageList} handleOnImageClick={handleOnImageClick}></ImageList>
      </div>
    </div>
  )
}

export default App;
