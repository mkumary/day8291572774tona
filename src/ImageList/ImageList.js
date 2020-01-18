import React, { useState } from 'react';
import './imagelist.css';
import LoadingIndicator from '../LoadingIndicator';
import DetailView from '../DetailView/DetailView';
import { getImageDetails } from '../service/service'
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';



const ImageList = ({ imageList = [], handleOnImageClick }) => {

    const [imageDetail, setImageDetail] = useState({});
    const [showItemDetails, setItemDetailsVisibility] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImageClick = (itemDetail) => {
        setItemDetailsVisibility(false);
        setLoading(true);
        getImageDetails(itemDetail.id).then(ele => { 
            setImageDetail(ele);
            setItemDetailsVisibility(true);
            setLoading(false);
        })
        
    }

    const renderListItem = (listItem, handleOnImageClick) => {
        return (<Paper key={listItem.id} onClick={() => handleImageClick(listItem)}>
                    <img className="thumbnail-image" alt={listItem.title} src={listItem.url.replace('=>', ':')}></img>
                </Paper>)
        };

    
    return (<div>
        <Carousel autoplay={false}>
            {imageList.map(listItem => renderListItem(listItem, handleOnImageClick))}
        </Carousel>
        {loading && <LoadingIndicator></LoadingIndicator>}
        {showItemDetails ? <DetailView imageDetail={imageDetail}></DetailView> : ''}
    </div>)
}
export default ImageList