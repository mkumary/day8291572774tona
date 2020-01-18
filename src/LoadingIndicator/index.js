import React from 'react';
import loadingImage from '../loading-indicator-gif-2.gif';
import './loading.css';
const LoadingIndicator = () => { 
    return <div><img className="loading-image" alt='Loading' src={loadingImage}></img></div>
}

export default LoadingIndicator;