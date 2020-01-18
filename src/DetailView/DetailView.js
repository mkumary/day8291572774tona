import React, { useState } from 'react';
import './detailview.css';
var tesseract = require("tesseract")
  , tess = new tesseract.BaseApi()
    , pix;
//import tesseract from 'node-tesseract-ocr';


const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }

const DetailView = ({ imageDetail }) => { 
    const [imageText, setImageText] = useState('');
    const renderFeatures = (features) => { 
        return (features.map((ele,index) =>  
            <li className="features-item" key={index}>{ele}</li>
        ))
    }
    const handleOnScan = (imageDetail) => { 
        tess.init('eng');
        tess.setImage(imageDetail.url);
        tess.recognize();
        setImageText(tess.getText())
        tess.clear();

//         tesseract.recognize('../loading-indicator-gif-2.gif', config)
//   .then(text => {
//     console.log("Result:", text)
//   })
//   .catch(error => {
//     console.log(error.message)
//   })
    }
    return (<div className="detail-container">
        <h3 className='detail-header'><span>Detail</span></h3>
        <div className="detail-body-container">
        <div className="detail-body">
            <div className='left-detail-container'>
                <img className="thumbnail-image" alt={imageDetail.title} src={imageDetail.url}></img>
            </div>
            <div className='right-detail-container'>
                <h3>{imageDetail.title}</h3>
                <h5>Description: </h5>
                <div className="description">{imageDetail.description}</div>
            </div>
        </div>
        <ul>
            {renderFeatures(imageDetail.features)}
        </ul>
            <div>
                <button className="scan-now" onClick={handleOnScan(imageDetail)}>Scan Now</button>
            </div>
            <div>{imageText}</div>
        </div>
    </div>)
}


export default DetailView;